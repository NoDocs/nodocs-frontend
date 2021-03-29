import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import MenuItem from 'atoms/MenuItem'

const StyledMenuItem = styled(MenuItem)`
  margin-left: -10px;
`

const StyledItemsContainer = styled.div`
  display: grid;
  margin-top: 16px;
  grid-column-gap: 12px;
  grid-row-gap: 12px;
  margin-bottom: 32px;
  grid-template-columns: repeat(auto-fill, 240px);
`

const TeamSection = ({ Icon, title, children }) => {
  return (
    <React.Fragment>
      <StyledMenuItem Icon={Icon} fontSize={16} text={title} />

      <StyledItemsContainer>
        {children}
      </StyledItemsContainer>
    </React.Fragment>
  )
}

TeamSection.propTypes = {
  Icon: PropTypes.element,
  children: PropTypes.any,
  title: PropTypes.string,
}

export default TeamSection
