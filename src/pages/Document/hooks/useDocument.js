import React from 'react'
import { useSelector } from 'react-redux'
import { withReact } from 'slate-react'
import { createEditor } from 'slate'
import { withHistory } from 'slate-history'
import { withIOCollaboration } from '@slate-collaborative/client'
import flow from 'lodash/flow'
import shortid from 'shortid'

import { authSelectors } from 'logic/auth'
import { documentSelectors } from 'logic/document'
import withRectangleSelect from '../plugins/withRectangleSelect'
import withDetectComponentInsert from '../plugins/withDetectComponentInsert'
import withNodeId from '../plugins/withNodeId'

const useDocument = () => {
  const [editorState, updateEditorState] = React.useState([{
    type: 'page',
    id: shortid.generate(),
    children: [{ type: 'paragraph', id: shortid.generate(), children: [{ text: '' }] }]
  }])

  const userName = useSelector(authSelectors.selectCurrUserProperty('name'))
  const color = useSelector(authSelectors.selectCurrUserProperty('color'))
  const activeSectionId = useSelector(documentSelectors.selectSectionProperty('id'))
  const activePageId = useSelector(documentSelectors.selectPageProperty('id'))

  const editor = React.useMemo(
    () => {
      const withPlugins = flow(
        withRectangleSelect,
        withDetectComponentInsert,
        withNodeId,
        withHistory,
        withReact,
      )(createEditor())

      const origin = process.env.NODE_ENV === 'production'
        ? process.env.BASE_API_URL
        : 'http://localhost:8000'

      const options = {
        docId: `/${activePageId}`,
        cursorData: {
          name: userName,
          color,
          alphaColor: color.slice(0, -2) + '0.2)'
        },
        url: `${origin}/${activePageId}`,
        connectOpts: {
          query: {
            name: userName,
            token: 'id',
            type: 'document',
            slug: activePageId,
          }
        },
      }

      return withIOCollaboration(withPlugins, options)
    },
    []
  )

  React.useEffect(() => { editor.connect() }, [])
  React.useEffect(() => editor.destroy, [])

  return {
    editor,
    editorState,
    updateEditorState,
    activeSectionId,
  }
}

export default useDocument
