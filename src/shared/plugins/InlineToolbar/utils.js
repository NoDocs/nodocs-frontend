import { Editor, Element as SlateElement } from 'slate'

export const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)

  return marks
    ? marks[format] === true
    : false
}

export const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
    return
  }

  Editor.addMark(editor, format, true)
}

export const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: n =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
  })

  return Boolean(match)
}
