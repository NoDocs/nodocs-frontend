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
  text-align: ${({ textAlign = 'left' }) => textAlign};
  line-height: 17px;
  font-size: 14px;

  ${props => props.hoverable && `
    cursor: pointer;

    &:hover {
      font-weight: 400;
    }
  `}
`

export default Label
