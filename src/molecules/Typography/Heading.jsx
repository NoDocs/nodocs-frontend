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
  fontSize: ${props => getFontSize(props)};
  font-weight: 300;
  font-family: Inter;
`

export default Heading
