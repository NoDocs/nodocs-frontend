import React from 'react'
import { createEditor } from 'slate'
import { withReact, ReactEditor } from 'slate-react'
import shortid from 'shortid'
import { useSelector } from 'react-redux'
import { withIOCollaboration, useCursor } from '@slate-collaborative/client'

import withEditableComponentVoid from '../plugins/withEditableComponentVoid'
import withDetectComponentInsert from '../plugins/withDetectComponentInsert'
import withRectangleSelect from '../plugins/withRectangleSelect'

const usePage = () => {
  const userName = useSelector(state => state.getIn(['auth', 'fullName']))
  const color = useSelector(state => state.getIn(['auth', 'color'])) || 'green'

  const [editorState, updateEditorState] = React.useState([
    { type: 'paragraph', id: shortid.generate(), children: [{ text: '' }] },
  ])

  const editor = React.useMemo(
    () => {
      const withPlugins = withEditableComponentVoid(
        withRectangleSelect(
          withDetectComponentInsert(
            withReact(
              createEditor()
            )
          )
        )
      )

      return withPlugins
      const origin = process.env.NODE_ENV === 'production'
        ? window.location.origin
        : 'http://localhost:8000'

      const options = {
        docId: '/' + 'sectionID',
        cursorData: {
          name: userName,
          color,
          alphaColor: color.slice(0, -2) + '0.2)'
        },
        url: `${origin}/sectionID`,
        connectOpts: {
          query: {
            name: userName,
            token: 'id',
            type: 'document',
            slug: 'sectionId',
          }
        },
      }

      return withIOCollaboration(withPlugins, options)
    },
    []
  )
  const { decorate } = useCursor(editor)

  const onEditorStateChange = (newEditorState) => {
    updateEditorState(newEditorState)
  }

  const onPageClick = () => {
    if (editor.selection) {
      console.log('editor is selected')
      return
    }

    ReactEditor.focus(editor)
  }

  // React.useEffect(
  //   () => {
  //     editor.connect()
  //     return editor.destroy
  //   },
  //   []
  // )

  return {
    editorState,
    onEditorStateChange,
    decorate,
    onPageClick,
    editor,
  }
}

export default usePage
