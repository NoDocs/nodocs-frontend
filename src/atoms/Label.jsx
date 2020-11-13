import styled from 'styled-components'

const getColor = (color) => {
  if (color === 'transparent') return 'rgba(255, 255, 255, 0.5)'
  if (color === 'active') return 'white'
  return 'black'
}

const Label = styled.p`
  font-family: quicksand;
  color: ${({ color }) => getColor(color)};
`

export default Label
