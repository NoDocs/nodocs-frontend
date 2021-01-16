import React from 'react'
import { Editor, Range } from 'slate'
import { useEditor } from 'slate-react'

const useInlineToolbar = () => {
  const [showInlineToolbar, updateShowInlineToolbar] = React.useState(false)
  const [coords, updateCoords] = React.useState({})

  const editor = useEditor()

  const setToolbarCoords = () => {
    const domSelection = window.getSelection()

    if (!domSelection) return
    if (!domSelection.rangeCount > 1) return

    const domRange = domSelection.getRangeAt(0)
    const rect = domRange.getBoundingClientRect()

    const top = rect.top + window.pageYOffset - 40
    const left = rect.left + window.pageXOffset - 45 + rect.width / 2

    updateCoords({ top, left })
  }

  const selectionExpanded = editor.selection
    ? Range.isExpanded(editor.selection)
    : false
  const selectionText = selectionExpanded
    ? Editor.string(editor, editor.selection)
    : ''

  React.useEffect(
    () => {
      if (!selectionExpanded || !selectionText) {
        updateShowInlineToolbar(false)
        return
      }

      if (!showInlineToolbar) {
        updateShowInlineToolbar(true)
      }

      setToolbarCoords()
    },
    [selectionExpanded, selectionText]
  )

  return {
    showInlineToolbar,
    coords,
  }
}

export default useInlineToolbar
