import React from 'react'
import { graphql, useLazyLoadQuery } from 'react-relay'
import { useHistory } from 'react-router-dom'

import DocumentIcon from 'assets/document.svg'
import DocumentElement from 'molecules/DocumentElement'
import TeamSection from './TeamSection'

const currTeamQuery = graphql`
  query TeamDocumentsMeQuery {
    me {
      currentTeam {
        id
      }
    }
  }
`

const documentsQuery = graphql`
  query TeamDocumentsDocumentsQuery ($teamId: String!) {
    documents(teamId: $teamId) {
      id
      name
      createdAt (format: "MMM D")
      owner {
        id
        avatar
        color
        fullName
      }
    }
  }
`

const TeamDocuments = () => {
  const { me } = useLazyLoadQuery(currTeamQuery)
  const { documents } = useLazyLoadQuery(documentsQuery, { teamId: me.currentTeam.id })
  const history = useHistory()

  const onDocumentClick = doc => () => {
    history.push(`/d/${doc.id}`)
  }

  return (
    <TeamSection Icon={<DocumentIcon />} title="Documents">
      {documents.map(document => (
        <DocumentElement
          key={document.id}
          name={document.name}
          members={[document.owner]}
          authorName={document.owner.fullName}
          createdAt={document.createdAt}
          onClick={onDocumentClick(document)}
        />
      ))}
    </TeamSection>
  )
}

export default TeamDocuments
