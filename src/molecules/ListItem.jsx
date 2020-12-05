import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import HoverableContainer from 'atoms/HoverableContainer'
import Label from 'atoms/Label'

const StyledHoverableContainer = styled(HoverableContainer)`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: ${({ proportions }) => proportions ? proportions : '22px auto'};
  align-items: center;
  grid-column-gap: 10px;
  position: relative;
  z-index: 2;
`

const StyledUnderline = styled.span`
  position: absolute;
  left: 0px;
  bottom: -2px;
  z-index: 1;
  height: 15px;
  width: 100%;
  background-color: #35A2F1;
  box-shadow: 0px 0px 10px rgba(53, 162, 241, 0.8);
  border-bottom-left-radius: 15px;
`

const StyledLabel = styled(Label)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ListItem = ({
  active,
  icon,
  showUnderline,
  label,
  color = 'active',
  onClick,
  proportions,
  className,
  renderAdditionalButtons
}) => (
  <StyledHoverableContainer
    className={className}
    proportions={proportions}
    active={active}
    onClick={onClick}
  >
    {icon && <img src={icon} height={24} alt={label} />}
    <StyledLabel color={color}>{label}</StyledLabel>
    {renderAdditionalButtons && renderAdditionalButtons(active)}
    {active && showUnderline && <StyledUnderline />}
  </StyledHoverableContainer>
)

ListItem.propTypes = {
  active: PropTypes.bool,
  showUnderline: PropTypes.bool,
  icon: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  proportions: PropTypes.string,
  renderAdditionalButtons: PropTypes.func,
}

export default ListItem
