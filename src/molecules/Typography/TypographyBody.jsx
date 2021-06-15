import styled from 'styled-components'

const StyledTypographyBody = styled.p`
  margin: 0px;
  letter-spacing: -0.006em;
  font-size: ${props => props.variant === 'body1' ? '1rem' : '0.875rem'};
  color: rgba(0, 0, 0, 0.8);
  line-height: 24px;
  font-family: Inter;
`

export default StyledTypographyBody
