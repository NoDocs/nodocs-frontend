const withEditableNeuronVoid = (editor) => {
  const { isVoid } = editor

  editor.isVoid = element => element.type === 'neuron'
    ? true
    : element.type === 'image'
      ? true
      : isVoid(element)

  return editor
}

export default withEditableNeuronVoid
