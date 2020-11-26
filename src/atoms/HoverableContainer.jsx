import styled from 'styled-components'

const getBackgroundColor = variant => {
  if (variant === 'inverted') {
    return 'rgba(0, 0, 0, 0.05)'
  }

  return 'rgba(255, 255, 255, 0.15)'
}

const HoverableContainer = styled.div`
  padding: 0px 18px;
  height: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  ${({ active, variant }) => active && `background-color: ${getBackgroundColor(variant)};`}
  ${({ active }) => active && 'border-radius: 5px 15px;'}

  &:hover {
    background-color: ${({ variant }) => getBackgroundColor(variant)};
    border-radius: 5px 15px;
  }
`

export default HoverableContainer
