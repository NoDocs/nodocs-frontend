import React from 'react'
import { useSelector } from 'react-redux'
import * as sharedb from 'sharedb/lib/client'
import * as jsondiff from 'json0-ot-diff'

import { authSelectors } from 'logic/auth'
import { documentSelectors } from 'logic/document'

import useCursors from './useCursors'

const isComponentUpdate = (editor) => {
  if (editor.selection) {
    const { focus: { path } } = editor.selection
    const node = editor
      .children[path[0]]
      .children[path[1]]

    return node.type === 'component'
  }

  return false
}

const getUpdatedComponentState = ({ componentId, editor, connectedComponent }) => {
  const { pageIndex, componentIndex, newEditorState } = editor.children.reduce((acc, page, pageI) => {
    let pageIndex = acc.pageIndex
    let componentIndex = acc.componentIndex

    const filteredChildren = page.children.filter((node, componentI) => {
      if (
        node.type !== 'component' ||
        node.id !== componentId
      ) return true

      if (pageIndex === null) {
        pageIndex = pageI
        componentIndex = componentI
      }

      return false
    })

    const newPage = {
      ...page,
      children: filteredChildren
    }

    return {
      pageIndex,
      componentIndex,
      newEditorState: [...acc.newEditorState, newPage]
    }
  }, { newEditorState: [], pageIndex: null, componentIndex: null })

  const editorPage = newEditorState[pageIndex]
  if(!editorPage) return

  newEditorState[pageIndex] = {
    ...editorPage,
    children: [
      ...(editorPage.children.slice(0, componentIndex) || []),
      {
        type: 'component',
        id: componentId,
        children: connectedComponent.data.children
      },
      ...(editorPage.children.slice(componentIndex) || [])
    ]
  }

  return newEditorState
}

const getCurrentComponentId = (editor) => {
  const { focus: { path } } = editor.selection
  const node = editor
    .children[path[0]]
    .children[path[1]]

  return node.id
}

const wsClient = token => new WebSocket('ws://localhost:8000', token)

const connection = token => new sharedb.Connection(wsClient(token))

const useCollaborative = ({ namespace, editor, editorState, updateEditorState, docId }) => {
  const oldValue = React.useRef()
  const syncMutex = React.useRef()
  const oldSelection = React.useRef([{
    id: 'test',
    selection: { anchor: { path: [0, 0], offset: 0 }, focus: { path: [0, 0], offset: 0 } }
  }])

  const userId = useSelector(authSelectors.selectCurrUserProperty('id'))
  const color = useSelector(authSelectors.selectCurrUserProperty('color'))
  const userName = useSelector(authSelectors.selectCurrUserProperty('fullName'))
  const componentIds = useSelector(documentSelectors.selectSectionProperty('componentIds'))
  const { decorate, setSelections } = useCursors({ userId })

  const doc = React.useMemo(
    () => connection(localStorage.getItem('accessToken')).get(namespace, docId),
    []
  )

  React.useEffect(
    () => {
      const onSubscribe = () => {
        syncMutex.current = true
        updateEditorState(doc.data.children)
        syncMutex.current = false
      }

      const onOperation = () => {
        syncMutex.current = true

        if (doc.data.selections) {
          const mySelection = doc
            .data
            .selections
            .find(currSelection => currSelection.id === userId)
          const otherSelections = doc
            .data
            .selections
            .filter(currSelection => currSelection.id !== userId)

          if (mySelection) editor.selection = mySelection.selection

          setSelections(otherSelections)
        }

        updateEditorState(doc.data.children)
        syncMutex.current = false
      }

      doc.subscribe(onSubscribe)
      doc.on('op', onOperation)
    },
    [setSelections, doc]
  )

  const handleComponentStateChange = async ({ newEditorState, connectedComponent, currentComponentId }) => {
    const component = newEditorState.reduce((acc, page) => {
      const pageComponent = page.children.find(node => node.id === currentComponentId)
      return [...acc, ...pageComponent.children]
    }, [])

    const diff = jsondiff(
      { current: connectedComponent.data.children },
      { children: component, selection: connectedComponent.data.children.selection }
    )

    if (Array.isArray(diff) && diff.length) {
      await new Promise((resolve, reject) => {
        try {
          connectedComponent.submitOp(diff, resolve)
        } catch (err) {
          reject(err)
        }
      })
    }
  }

  const sendOp = args => new Promise(resolve => doc.submitOp(args, resolve))

  React.useEffect(
    () => {
      (componentIds || [])
        .filter(componentId => !editor.connectedComponents[componentId])
        .forEach((componentId) => {
          const component = connection(localStorage.getItem('accessToken')).get('components', componentId)

          const onComponentSubscribe = ({ componentId }) =>  () => {
            const connectedComponent = editor.connectedComponents[componentId]

            const newEditorState = getUpdatedComponentState({ componentId, editor, connectedComponent })

            if(newEditorState) updateEditorState(newEditorState)
          }
          const onComponentOperation = ({ componentId }) =>  () => {
            const connectedComponent = editor.connectedComponents[componentId]

            const newEditorState = getUpdatedComponentState({ componentId, editor, connectedComponent })

            if(newEditorState) updateEditorState(newEditorState)
          }

          if(!editor.connectedComponents) {
            editor.connectedComponents = { [componentId]: component }
          } else {
            editor.connectedComponents[componentId] = component
          }

          component.subscribe(onComponentSubscribe({ componentId }))
          component.on('op', onComponentOperation({ componentId }))
        })
    },
    [componentIds]
  )

  const handleSectionStateChange = (newValue) => {
    oldValue.current = { selections: oldSelection.current, children: editorState }

    const selections = oldSelection
      .current
      .map(selection => selection.id === userId
        ? { id: userId, selection: editor.selection, color, name: userName }
        : selection)

    const diff = jsondiff(oldValue, { selections, children: newValue })
    oldSelection.current = selections

    if (!syncMutex.current) {
      if (Array.isArray(diff) && diff.length) {
        sendOp(diff)
      }
    }
  }

  const onEditorStateChange = (newValue) => {
    const isComponent = isComponentUpdate(editor)

    if (isComponent && editor.connectedComponents) {
      const currentComponentId = getCurrentComponentId(editor)
      if(currentComponentId) {
        const connectedComponent = editor.connectedComponents[currentComponentId]
        if(connectedComponent) return handleComponentStateChange({ newEditorState: newValue, connectedComponent, currentComponentId })
      }
    }

    handleSectionStateChange(newValue)
  }

  return {
    decorate,
    onEditorStateChange,
  }
}

export default useCollaborative
