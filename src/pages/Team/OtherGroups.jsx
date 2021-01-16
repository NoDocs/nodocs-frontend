import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { teamSelectors } from 'logic/team'
import Toggle from 'molecules/Toggle'
import Collection from './Group'

const StyledInnerContainer = styled.div`
  margin: 20px 0px 0px 20px;
`

const OtherGroups = () => {
  return null
  // const otherCollections = useSelector(teamSelectors.selectTeamProperty('otherCollections'))

  return (
    <Toggle defaultOpen={false} title="Other Collections">
      <StyledInnerContainer>
        {otherCollections.map(collectionId => <Collection key={collectionId} id={collectionId} />)}
      </StyledInnerContainer>
    </Toggle>
  )
}

export default OtherGroups