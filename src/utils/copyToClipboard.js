const copyToClipboard = (text) => {
  const input = document.createElement('input')
  input.setAttribute('value', text)
  document.body.appendChild(input)

  input.focus()
  input.select()

  document.execCommand('copy')
  document.body.removeChild(input)
}

export default copyToClipboard
