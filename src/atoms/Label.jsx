import styled from 'styled-components'

const getColor = (color) => {
  if (color === 'transparent') return 'rgba(255, 255, 255, 0.5)'
  if (color === 'active') return 'white'
  return 'black'
}

const Label = styled.p`
  font-family: quicksand;
  font-weight: ${({ weight = 300 }) => weight};
  color: ${({ color = 'transparent' }) => getColor(color)};
  line-height: 17px;
  font-size: 14px;
`

export default Label
