import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import HoverableContainer from 'atoms/HoverableContainer'
import Label from 'atoms/Label'

const StyledHoverableContainer = styled(HoverableContainer)`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 22px auto;
  align-items: center;
  grid-column-gap: 15px;
`

const ListItem = ({ active, icon, label }) => (
  <StyledHoverableContainer active={active}>
    <img src={icon} height={24} alt={label} />
    <Label color="active">{label}</Label>
  </StyledHoverableContainer>
)

ListItem.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string,
}

export default ListItem
