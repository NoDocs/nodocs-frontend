import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import get from 'lodash/fp/get'
import { ForceGraph2D } from 'react-force-graph'
import { graphql, useLazyLoadQuery } from 'react-relay'
import { useHistory } from 'react-router-dom'

import withRenderPortal from 'hocs/withRenderPortal'
import FullScreenModal from 'molecules/FullScreenModal'

const StyledContentContainer = styled.div`
  width: 100vw;
  height: 60vh;
  background-color: white;
  background: #F0F0F0;
  box-shadow: 0px -1px 8px rgba(0, 0, 0, 0.15);
  border-radius: 25px 25px 0px 0px;
`

const modalProps = {
  containerStyles: { justifyContent: 'flex-end' },
  overlayStyles: { backgroundColor: 'rgba(0,0,0,0.0)' },
}

const currTeamQuery = graphql`
  query GraphModalMeQuery {
    me {
      currentTeam {
        id
        name
      }
    }
  }
`

const documentsQuery = graphql`
  query GraphModalDocumentsQuery ($teamId: String!) {
    documents(first: 2147483647, teamId: $teamId) @connection(key: "Team_documents") {
      __id
      edges {
        node {
          id
          name
          createdAt (format: "MMM D")
          neurons {
            id
            neuronId
            name
          }
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

const neuronsQuery = graphql`
  query GraphModalNeuronsQuery ($teamId: String!) {
    neurons(first: 2147483647, teamId: $teamId) @connection(key: "Team_neurons") {
      __id
      edges {
        node {
          id
          documents {
            id
            name
          }
          neuronId
          file {
            url
          }
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

const GraphModal = ({ closePortal }) => {
  const history = useHistory()
  const { me } = useLazyLoadQuery(currTeamQuery, undefined, { fetchPolicy: 'store-only' })
  const { documents: { edges: documents } } = useLazyLoadQuery(
    documentsQuery,
    { teamId: me.currentTeam.id },
    { fetchPolicy: 'store-only' }
  )
  const { neurons: { edges: neurons } } = useLazyLoadQuery(
    neuronsQuery,
    { teamId: me.currentTeam.id },
    { fetchPolicy: 'store-only' }
  )

  const data = React.useMemo(
    () => {
      const nodes = []
      const links = []

      documents
        .map(curr => curr.node)
        .forEach(document => nodes.push({ id: document.id, name: document.name, type: 'document' }))

      neurons
        .map(curr => curr.node)
        .forEach(neuron => nodes.push({ id: neuron.neuronId, name: neuron.name, fileUrl: get('file.url', neuron), type: 'neuron' }))

      nodes.push({
        id: me.currentTeam.id,
        name: me.currentTeam.name,
        type: 'team',
      })

      neurons
        .map(curr => curr.node)
        .filter(neuron => !neuron.documents.length)
        .forEach(neuron => links.push({
          source: neuron.neuronId,
          target: me.currentTeam.id,
        }))

      documents
        .map(curr => curr.node)
        .forEach(document => {
          links.push({ source: document.id, target: me.currentTeam.id })

          if (document.neurons) {
            console.log(document.neurons)
            document.neurons.forEach(neuron => links.push({
              source: document.id,
              target: neuron.neuronId,
            }))
          }
        })

      return { nodes, links }
    },
    []
  )

  const nodePaint = React.useCallback(
    ({ type, fileUrl, name, x, y }, color, ctx) => {
      ctx.fillStyle = type === 'team'
        ? 'black'
        : color
      ctx.fillRect(x - 6, y - 4, 12, 12)

      if (type === 'document') {
        const size = 8
        const image = new Image()
        image.src = 'public/assets/document.svg'
        ctx.drawImage(image, x - size / 2, y - size / 4, size, size)
      }

      if (type === 'neuron' && !fileUrl) {
        const size = 6
        const image = new Image()
        image.src = 'public/assets/neuron.svg'
        ctx.drawImage(image, x - size / 2, y - size / 4, size, size)
      }

      if (type === 'neuron' && fileUrl) {
        const size = 8
        const image = new Image()
        image.crossOrigin = 'Anonymous'
        image.src = 'public/assets/image.svg'
        ctx.drawImage(image, x - size / 2, y - size / 4, size, size)
      }

      if (type === 'team') {
        const label = name[0]
        ctx.font = '8px quicksand'

        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = 'white'
        ctx.fillText(label, x, y + 2)

        ctx.font = '4px quicksand'
        ctx.fillStyle = 'black'
        ctx.fillText(name, x, y + 12)
      }
    },
    []
  )

  const handleNodeClick = React.useCallback(
    (node) => {
      if (node.type === 'neuron') {
        history.push(`?neuronId=${node.id}`)
        return
      }

      if (node.type === 'document') {
        closePortal()
        history.push(`/d/${node.id}`)
        return
      }
    },
    []
  )

  return (
    <FullScreenModal close={closePortal} {...modalProps}>
      <StyledContentContainer>
        <ForceGraph2D
          graphData={data}
          nodeLabel="name"
          nodeCanvasObject={(node, ctx) => nodePaint(node, 'white', ctx)}
          nodePointerAreaPaint={nodePaint}
          onNodeClick={handleNodeClick}
        />
      </StyledContentContainer>
    </FullScreenModal>
  )
}

GraphModal.propTypes = {
  closePortal: PropTypes.func,
}

export default withRenderPortal(() => 'graph-modal')(GraphModal)
