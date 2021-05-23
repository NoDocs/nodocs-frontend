import React from 'react'
import { ConnectionHandler, graphql, useLazyLoadQuery, useSubscription } from 'react-relay'
import { useHistory } from 'react-router-dom'

import DocumentIcon from 'assets/document.svg'
import DocumentElement from 'molecules/DocumentElement'
import TeamSection from './TeamSection'

const currTeamQuery = graphql`
  query TeamDocumentsMeQuery {
    me {
      currentTeam {
        id
        name
      }
    }
  }
`

const documentsQuery = graphql`
  query TeamDocumentsDocumentsQuery ($teamId: String!) {
    documents(first: 2147483647, teamId: $teamId) @connection(key: "Team_documents") {
      __id
      edges {
        node {
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
    }
  }
`

const documentCreatedSubscription = graphql`
  subscription TeamDocumentsSubscription($input: CreateDocumentSubscriptionInput!) {
    createDocument(input: $input) {
      document {
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
      clientSubscriptionId
    }
  }
`

const TeamDocuments = () => {
  const { me } = useLazyLoadQuery(currTeamQuery)
  const { documents } = useLazyLoadQuery(documentsQuery, { teamId: me.currentTeam.id })
  const history = useHistory()

  useSubscription({
    subscription: documentCreatedSubscription,
    variables: { input: {} },
    updater: store => {
      const document = store
        .getRootField('createDocument')
        .getLinkedRecord('document')

      const documentsConnection = store.get(documents.__id)
      const edge = ConnectionHandler.createEdge(store, documentsConnection, document)
      ConnectionHandler.insertEdgeAfter(documentsConnection, edge)
    }
  })

  const onDocumentClick = doc => () => {
    history.push(`/d/${doc.id}`)
  }

  return (
    <TeamSection Icon={<DocumentIcon />} title="Documents">
      {documents.edges.map(({ node: document }) => (
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
