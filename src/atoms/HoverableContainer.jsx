import styled from 'styled-components'

const HoverableContainer = styled.div`
  padding: 6px 18px;
  cursor: pointer;
  ${({ active }) => active && 'background-color: rgba(255, 255, 255, 0.15);'}
  ${({ active }) => active && 'border-radius: 5px 15px;'}

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 5px 15px;
  }
`

export default HoverableContainer
