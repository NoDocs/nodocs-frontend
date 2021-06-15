import styled from 'styled-components'

const StyledTypographySubtitle = styled.p`
  margin: 0px;
  letter-spacing: -0.006em;
  font-size: ${props => props.variant === 'subtitle1' ? '1rem' : '0.875rem'};
  color: rgba(0, 0, 0, 0.8);
  line-height: 24px;
  font-family: Inter;
  font-weight: 500;
`

export default StyledTypographySubtitle
