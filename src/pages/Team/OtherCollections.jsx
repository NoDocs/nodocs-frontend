import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { teamSelectors } from 'logic/team'
import Toggle from 'molecules/Toggle'
import Collection from './Collection'

const InnerContainer = styled.div`
  margin: 20px 0px 0px 20px;
`

const OtherCollections = () => {
  const otherCollections = useSelector(teamSelectors.selectTeamProperty('otherCollections'))

  return (
    <Toggle title="Other Collections">
      <InnerContainer>
        {otherCollections.map(collectionId => <Collection key={collectionId} id={collectionId} />)}
      </InnerContainer>
    </Toggle>
  )
}

export default OtherCollections