import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ArrowDownIcon from 'assets/components/ArrowDownIcon'

const StyledTitleContainer = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  align-items: center;
  grid-column-gap: 12px;
  cursor: pointer;
`
const StyledIconContainer = styled.div`
  transition: all .2s ease;
  transform: ${p => p.isOpen ? null : 'rotate(180deg)'};
  display: flex;
  align-items: center;
`

const StyledTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  font-family: Quicksand;
`

const Toggle = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(true)
  return (
    <div>
      <StyledTitleContainer onClick={() => setOpen(!isOpen)}>
        <StyledIconContainer isOpen={isOpen}>
          <ArrowDownIcon fill="#000000" />
        </StyledIconContainer>
        <StyledTitle>{title}</StyledTitle>
      </StyledTitleContainer>
      {isOpen && <>{children}</>}
    </div>
  )
}

Toggle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Toggle