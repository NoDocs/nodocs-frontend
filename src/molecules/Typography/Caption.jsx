import styled from 'styled-components'

const Caption = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 0.85rem;
  line-height: 16px;
  letter-spacing: 0.005em;
  color: ${props => props.color || 'rgba(255, 255, 255, 0.4)'};
`

export default Caption
