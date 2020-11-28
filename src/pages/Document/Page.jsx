import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledPageContainer = styled.div`
  background: #FFFFFF;
  height: 60px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  margin-top: 25px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 30px;
  padding: 20px;
  overflow: hidden;
`

const Page = ({ id, children }) => {
  return (
    <StyledPageContainer data-page-id={id}>
      {children}
    </StyledPageContainer>
  )
}

Page.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any,
}

export default Page
