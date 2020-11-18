import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Label from 'atoms/Label'

const StyledTable = styled.div`
  width: 600px;
  margin: auto;
  margin-bottom: 50px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`

const StyledTableRow = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: ${({ proportions }) => proportions};
`

const StyledCell = styled.div``

const Table = ({ headerTabs, proportions }) => {
  return (
    <StyledTable>
      <StyledTableRow proportions={proportions}>
        {headerTabs.map(curr => typeof curr === 'string'
          ? <Label weight={500} color="black">{curr}</Label>
          : curr)}
      </StyledTableRow>

      <StyledTableRow proportions={proportions}>
        <StyledCell>Content</StyledCell>
        <StyledCell>Content</StyledCell>
        <StyledCell>Content</StyledCell>
        <StyledCell>Content</StyledCell>
        <StyledCell>Content</StyledCell>
      </StyledTableRow>
    </StyledTable>
  )
}

Table.propTypes = {
  headerTabs: PropTypes.array,
  proportions: PropTypes.string,
}

export default Table
