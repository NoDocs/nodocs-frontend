import styled from 'styled-components'

const HoverableContainer = styled.div`
  padding: 0px 18px;
  height: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  ${({ active }) => active && 'background-color: #000000;'}
  ${({ active }) => active && 'border-radius: 4px;'}

  &:hover {
    background-color: #000000;
    border-radius: 4px;
  }
`

export default HoverableContainer
