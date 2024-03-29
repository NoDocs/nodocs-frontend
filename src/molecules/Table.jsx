import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import history from 'utils/history'

import Label from 'atoms/Label'
import Avatar from 'atoms/Avatar'
import Checkbox from 'atoms/Checkbox'
import AddIcon from 'assets/components/AddIcon'
import DragIcon from 'assets/components/DragIcon'
import MoreIcon from 'assets/components/MoreIcon'
import SubMenuIcon from 'assets/components/SubMenuIcon'

const StyledTable = styled.div`
  padding: 18px 0;
  margin: 13px auto 50px auto;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`

const StyledTableRow = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: ${({ proportions }) => proportions};
  height: 30px;
  cursor: pointer;
  :hover {
    background-color: #ECEFF1;
    section {
      opacity: 1;
    }
  }
`
const StyledTableHeader = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: ${({ proportions }) => proportions};
  margin-bottom: 8px;
`

const StyledCell = styled.div`
  color: #000000;
  font-size: 14px;
  font-family: Quicksand;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  display: grid;
  grid-auto-flow: column;
  ${({ jc = 'center' }) => `justify-content: ${jc}`};
  ${({ ai = 'center' }) => `align-items: ${ai}`};
  :not(:last-child):not(:first-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
`
const StyledHeaderCell = styled.div`
  margin-left: 20px;
`

const StyledAddDocument = styled.div`
  margin-top: 12px;
  margin-left: 38px;
  cursor: pointer;
  display: flex;
  align-items: center;
`
const StyledAddText = styled.span`
  color: rgba(0,0,0,0.5);
  font-size: 14px;
  font-family: Quicksand;
  margin-left: 9px;
`
const StyledHiddenSection = styled.section`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-evenly;
  opacity: 0;
`
const SelectedNeon = styled.div`
  background-color: #35A2F1;
  width: 2px;
  height: calc(100% + 1px);
  box-shadow: 0px 2px 10px rgba(53, 162, 241, 0.8);
  margin-bottom: -1px;
  opacity: ${({ selected }) => selected ? 1 : 0};
`

const NewAvatar = styled(Avatar)`
  && {
    width: 20px;
    height: 20px;
    border: unset;
  }
`

const Table = ({ headerTabs, proportions, data, createDocument }) => {
  return (
    <StyledTable>
      <StyledTableHeader proportions={proportions}>
        {headerTabs.map((curr, index) => typeof curr.content === 'string'
          ? <Label key={index} weight={500} textAlign={curr.position} color="black">{curr.content}</Label>
          : <StyledHeaderCell key={index}>{curr.content}</StyledHeaderCell>)}
      </StyledTableHeader>
      {data.map((document) => (
        <StyledTableRow key={document.get('id')} proportions={proportions} onClick={() => history.push(`/d/${document.get('id')}`)}>
          <StyledCell jc="start">
            <SelectedNeon selected={true} />
            <StyledHiddenSection>
              <DragIcon height={12} width={12} fill={'rgba(0,0,0,0.25)'} />
              <div style={{ width: 12, height: 12 }}>
                <Checkbox checked onChange={() => console.log('checking')} />
              </div>
            </StyledHiddenSection>
          </StyledCell>
          <StyledCell jc="start">
            {document.get('title')}
          </StyledCell>
          <StyledCell>14</StyledCell>
          <StyledCell>19</StyledCell>
          <StyledCell>31</StyledCell>
          <StyledCell jc="space-evenly">
            <NewAvatar userId={document.get('creatorId')} />
            <SubMenuIcon />
            <MoreIcon />
          </StyledCell>
        </StyledTableRow>
      )).toList()}
      <StyledAddDocument onClick={createDocument}>
        <AddIcon fill="#000" width={14} height={14} />
        <StyledAddText>Add a document</StyledAddText>
      </StyledAddDocument>
    </StyledTable>
  )
}

Table.propTypes = {
  headerTabs: PropTypes.array,
  proportions: PropTypes.string,
  data: PropTypes.object.isRequired,
  createDocument: PropTypes.func,
}

export default Table
