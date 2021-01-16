import React from 'react'
import { useSelector } from 'react-redux'
import { withReact } from 'slate-react'
import { createEditor } from 'slate'
import flow from 'lodash/flow'
import shortid from 'shortid'

import {documentSelectors } from 'logic/document'

import withRectangleSelect from '../plugins/withRectangleSelect'
import withDetectComponentInsert from '../plugins/withDetectComponentInsert'
import withNodeId from '../plugins/withNodeId'
import withPaging from '../plugins/paging/withPaging'
import { withHistory } from 'slate-history'

const useDocument = () => {
  const [editorState, updateEditorState] = React.useState([{
    type: 'page',
    id: shortid.generate(),
    children: [{ type: 'paragraph', id: shortid.generate(), children: [{ text: '' }] }]
  }])

  const activeSectionId = useSelector(documentSelectors.selectSectionProperty('id'))

  const editor = React.useMemo(
    () => {
      return flow(
        withRectangleSelect,
        withDetectComponentInsert,
        withPaging(),
        withNodeId,
        withHistory,
        withReact,
      )(createEditor())
    },
    []
  )

  return {
    editor,
    editorState,
    updateEditorState,
    activeSectionId,
  }
}

export default useDocument
