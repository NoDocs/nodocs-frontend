import styled from 'styled-components'

const getColor = (color) => {
  if (color === 'transparent') return 'rgba(255, 255, 255, 0.5)'
  if (color === 'active') return 'white'
  return 'black'
}

const Title = styled.h5`
  font-family: quicksand;
  font-weight: bold;
  color: ${({ color = 'active' }) => getColor(color)};
  font-size: 18px;
`

export default Title
