import styled from 'styled-components'

const StyledAvatar = styled.div`
  height: ${props => props.size || 35}px;
  width: ${props => props.size || 35}px;
  border-radius: 50%;
  border: ${({ color }) => `2px solid ${color}`};
  background-image: url(${props => props.avatar});
  background-color: ${props => props.color};
  position: relative;

  ${props => !props.avatar && `
    &:before {
      content: "${props.name.slice(0, 2)}";
      height: 100%;
      display: flex;
      font-family: quicksand;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: white;
    }
  `};
`

export default StyledAvatar
