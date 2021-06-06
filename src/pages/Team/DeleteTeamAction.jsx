import React from 'react'
import { useLazyLoadQuery, useMutation } from 'react-relay'
import { graphql } from 'graphql'

import DeleteIcon from 'assets/delete.svg'
import MenuItem from 'atoms/MenuItem'

const meQuery = graphql`
  query DeleteTeamActionQuery {
    me {
      currentCompany {
        id
      }
      currentTeam {
        id
      }
    }
  }
`

const deleteTeamMutation = graphql`
  mutation DeleteTeamActionMutation($input: DeleteTeamInput!) {
    deleteTeam(input: $input) {
      switchedTeam { id }
      deletedTeam { id }
    }
  }
`

const DeleteTeamAction = () => {
  const { me } = useLazyLoadQuery(meQuery, undefined, { fetchPolicy: 'store-only' })
  const [deleteTeam] = useMutation(deleteTeamMutation)

  const handleDeleteTeam = () => {
    deleteTeam({
      variables: {
        input: { teamId: me.currentTeam.id },
      },
      updater: (store) => {
        const deletedTeamId = me.currentTeam.id
        const switchedTeam = store
          .getRootField('deleteTeam')
          .getLinkedRecord('switchedTeam')
        const rootStore = store.getRoot()

        rootStore
          .getLinkedRecord('me')
          .setLinkedRecord(switchedTeam, 'currentTeam')

        const teams = rootStore.getLinkedRecords(
          'teams',
          { companyId: me.currentCompany.id }
        )

        rootStore
          .setLinkedRecords(
            teams.filter(curr => curr.getValue('id') !== deletedTeamId),
            'teams',
            { companyId: me.currentCompany.id }
          )
      },
    })
  }

  return (
    <MenuItem
      Icon={<DeleteIcon size={18} />}
      text="Delete team"
      onClick={handleDeleteTeam}
    />
  )
}

export default DeleteTeamAction
