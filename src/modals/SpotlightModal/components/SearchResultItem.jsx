import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Typography from 'molecules/Typography'

const StyledItemContainer = styled.div`
  padding: 8px;
  padding-left: 16px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 24px auto;
  grid-column-gap: 8px;
  align-items: center;
  border-left: 2px solid transparent;

  &:hover,
  &:focus {
    outline: none;
    border-left: 2px solid white;
    background-color: rgba(255, 255, 255, 0.1);
  }

  ${props => props.active && `
    border-left: 2px solid white;
    background-color: rgba(255, 255, 255, 0.1);
  `}
`

const SearchResultItem = ({ icon, label, onClick }) => {
  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      onClick(event)
    }
  }

  return (
    <StyledItemContainer tabIndex={0} onKeyDown={onKeyDown} onClick={onClick}>
      {icon}

      <Typography variant="caption" color="white">
        {label}
      </Typography>
    </StyledItemContainer>
  )
}

SearchResultItem.propTypes = {
  icon: PropTypes.any,
  label: PropTypes.string,
  onClick: PropTypes.func,
}

export default SearchResultItem
