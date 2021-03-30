const withEditableNeuronVoid = (editor) => {
  const { isVoid } = editor

  editor.isVoid = element => element.type === 'neuron'
    ? true
    : isVoid(element)

  return editor
}

export default withEditableNeuronVoid
