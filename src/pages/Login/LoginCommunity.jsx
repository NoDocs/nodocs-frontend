import React from 'react'
import styled from 'styled-components'

import Label from 'atoms/Label'

const StyledContentContainer = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 35px;
  width: 600px;
  box-sizing: border-box;
`

const StyledLinksContainer = styled.div`
  margin-bottom: 20px;
  background-color: white;
`

const StyledUnderLine = styled.span`
  text-decoration: underline;
  cursor: pointer;
`

const LoginCommunity = React.forwardRef((_, ref) => (
  <StyledContentContainer ref={ref}>
    <StyledLinksContainer>
      <Label color="#000000">Follow us on <StyledUnderLine>Twitter.</StyledUnderLine></Label>
      <Label color="#000000"><StyledUnderLine>Product updates.</StyledUnderLine></Label>
      <Label color="#000000"><StyledUnderLine>Community.</StyledUnderLine></Label>
    </StyledLinksContainer>

    <Label color="#000000">Here are our <StyledUnderLine>terms and conditions</StyledUnderLine></Label>
  </StyledContentContainer>
))

LoginCommunity.displayName = 'LoginCommunity'

export default LoginCommunity
