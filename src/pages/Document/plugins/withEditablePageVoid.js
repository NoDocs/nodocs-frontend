const withEditablePageVoid = (editor) => {
  const { isVoid } = editor

  editor.isVoid = element => element.type === 'page'
    ? true
    : isVoid(element)

  return editor
}

export default withEditablePageVoid
