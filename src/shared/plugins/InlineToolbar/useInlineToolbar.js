import React from 'react'
import { Editor, Range } from 'slate'

const isSelectionExpanded = editor => Boolean(editor.selection) && Range.isExpanded(editor.selection)
const getSelectedText = editor => editor.selection
  ?  Editor.string(editor, editor.selection)
  : ''

const useInlineToolbar = ({ editor, ref }) => {
  const [hidden, setHidden] = React.useState(false)

  const selectionExpanded = isSelectionExpanded(editor)
  const selectionText = getSelectedText(editor)

  React.useEffect(
    () => {
      const domSelection = window.getSelection()

      if (!selectionText
        || !selectionExpanded
        || !domSelection
        || domSelection.rangeCount < 1) {
        if (!hidden) setHidden(true) 
        return
      }

      if (hidden) setHidden(false)

      setTimeout(
        () => {
          const { top, left, width } = domSelection
            .getRangeAt(0)
            .getBoundingClientRect()

          const { current } = ref

          current.style.top = `${top + window.pageYOffset - current.offsetHeight - 10}px`
          current.style.left = `${left + window.pageXOffset - current.offsetWidth / 2 + width / 2}px`
        },
        0
      )
    },
    [selectionExpanded, selectionText, ref]
  )

  return { hidden }
}

export default useInlineToolbar
