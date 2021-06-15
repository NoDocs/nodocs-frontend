import styled from 'styled-components'

const getFontSize = (props) => {
  switch (props.as) {
    case 'h1':
      return '6rem'
    case 'h2':
      return '3.75rem'
    case 'h3':
      return '3rem'
    case 'h4':
      return '2.125rem'
    case 'h5':
      return '1.5rem'
    case 'h6':
      return '1.25rem'
  }
}

const Heading = styled.h1`
  font-size: ${props => getFontSize(props)};
  letter-spacing: -0.022em;
  font-weight: 300;
  font-family: Inter;

  ${props => props.mt && `margin-top: ${props.mt * 8}px;`}
  ${props => props.mb && `margin-bottom: ${props.mb * 8}px;`}
`

export default Heading
