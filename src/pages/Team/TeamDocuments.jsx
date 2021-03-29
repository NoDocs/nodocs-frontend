import React from 'react'
import { graphql, useLazyLoadQuery } from 'react-relay'

import DocumentIcon from 'assets/document.svg'
import DocumentElement from 'molecules/DocumentElement'
import TeamSection from './TeamSection'
import { useHistory } from 'react-router'

const query = graphql`
  query TeamDocumentsQuery {
    documents {
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
  const { documents } = useLazyLoadQuery(query)
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
