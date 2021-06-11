import styled from 'styled-components'

const Caption = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 0.85rem;
  line-height: 0.85rem;
  letter-spacing: 0.005em;
  line-height: ceil((0.85 * 1.3) / 8) * 8;
  color: ${props => props.color || 'rgba(255, 255, 255, 0.4)'};
`

export default Caption
