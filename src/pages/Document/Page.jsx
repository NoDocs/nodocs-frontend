import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledEditorContainer = styled.div`
  background: #FFFFFF;
  height: 54px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  margin-top: 25px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 30px;
  padding: 20px;
  overflow: hidden;
  border-left: 0px;
`

const Page = React.forwardRef(({ attributes, id, content }, ref) => {
  return (
    <StyledEditorContainer
      data-start="selection"
      ref={ref}
      data-page-id={id}
      {...attributes}
    >
      {content}
    </StyledEditorContainer>
  )
})

Page.displayName = 'Page'
Page.propTypes = {
  attributes: PropTypes.object,
  id: PropTypes.string,
  content: PropTypes.any,
}

export default Page

