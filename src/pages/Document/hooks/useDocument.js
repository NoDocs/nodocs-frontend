import React from 'react'
import { useSelector } from 'react-redux'
import { withReact } from 'slate-react'
import { createEditor } from 'slate'
import flow from 'lodash/flow'
import shortid from 'shortid'
import { withHistory } from 'slate-history'
import { withIOCollaboration } from '@slate-collaborative/client'

import { documentSelectors } from 'logic/document'

import withRectangleSelect from '../plugins/withRectangleSelect'
import withDetectComponentInsert from '../plugins/withDetectComponentInsert'
import withNodeId from '../plugins/withNodeId'
import withPaging from '../plugins/paging/withPaging'

const useDocument = () => {
  const [editorState, updateEditorState] = React.useState([{
    type: 'page',
    id: shortid.generate(),
    children: [{ type: 'paragraph', id: shortid.generate(), children: [{ text: '' }] }]
  }])

  const activeSectionId = useSelector(documentSelectors.selectSectionProperty('id'))

  const editor = React.useMemo(
    () => {
      const enhancedEditor = flow(
        withRectangleSelect,
        withDetectComponentInsert,
        withPaging(),
        // withNodeId,
        withHistory,
        withReact,
      )(createEditor())

      const origin = process.env.NODE_ENV === 'production'
        ? process.env.BASE_API_URL
        : 'http://localhost:8000'

      const options = {
        docId: `/${activeSectionId}`,
        cursorData: {
          name: 'Guka',
          color: 'black',
          alphaColor: 'black'.slice(0, -2) + '0.2)'
        },
        url: `${origin}/${activeSectionId}`,
        connectOpts: {
          query: {
            name: 'Guka',
            token: 'id',
            type: 'document',
            slug: activeSectionId,
          }
        },
      }

      return withIOCollaboration(enhancedEditor, options)
    },
    []
  )

  React.useEffect(
    () => {
      if (!editor.connect) return

      editor.connect()
      return editor.destroy
    },
    [editor]
  )

  return {
    editor,
    editorState,
    updateEditorState,
    activeSectionId,
  }
}

export default useDocument
