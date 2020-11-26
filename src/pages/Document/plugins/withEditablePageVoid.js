const withEditableVoid = (editor) => {
  const { isVoid } = editor

  editor.isVoid = element => element.type === 'page'
    ? true
    : isVoid(element)

  return editor
}

export default withEditableVoid
