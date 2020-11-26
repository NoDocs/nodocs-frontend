const withEditableVoid = (editor) => {
  const { isVoid } = editor

  editor.isVoid = element => element.type === 'component'
    ? true
    : isVoid(element)

  return editor
}

export default withEditableVoid
