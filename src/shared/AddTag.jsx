import React from 'react'
import styled from 'styled-components'
import { graphql, useMutation } from 'react-relay'
import { useParams } from 'react-router-dom'

import AutoTagIcon from 'assets/autotag.svg'
import IconButton from 'atoms/IconButton'
import Typography from 'molecules/Typography'
import AutoSizeInput from 'atoms/AutoSizeInput'

const StyledAddTagContainer = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: center;
`

const StyledAutoSizeInput = styled(AutoSizeInput)`
  color: rgba(0, 0, 0, 0.6);
`

const createTagMutation = graphql`
  mutation AddTagMutation($input: CreateTagInput!) {
    createTag(input: $input) {
      tag {
        id
        name
      }
    }
  }
`

const AddTag = () => {
  const { documentId } = useParams()
  const [addMode, toggleAddMode] = React.useState(false)
  const [tagName, updateTag] = React.useState('')
  const [createTag] = useMutation(createTagMutation)

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      createTag({
        variables: {
          input: {
            name: tagName,
            documentId,
          }
        },
        updater: store => {
          const tag = store
            .getRootField('createTag')
            .getLinkedRecord('tag')
          const tags = store
            .getRoot()
            .getLinkedRecords('documentTags', { documentId })
            .concat([tag])

          store
            .getRoot()
            .setLinkedRecords(tags, 'documentTags', { documentId })
        },
        onCompleted: () => {
          toggleAddMode(false)
          updateTag('')
        },
      })
    }
  }

  return (
    <StyledAddTagContainer onClick={() => toggleAddMode(true)}>
      <IconButton>
        <AutoTagIcon size={24} />
      </IconButton>

      {addMode && (
        <StyledAutoSizeInput
          value={tagName}
          autoFocus
          onKeyDown={onKeyDown}
          onChange={event => updateTag(event.target.value)}
          onBlur={() => toggleAddMode(false)}
        />
      )}

      {!addMode && (
        <Typography color="rgba(0, 0, 0, 0.8)" variant="caption">
          Add Tag
        </Typography>
      )}
    </StyledAddTagContainer>
  )
}

export default AddTag
