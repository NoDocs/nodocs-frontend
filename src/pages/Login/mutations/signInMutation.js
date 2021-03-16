import { graphql, commitMutation } from 'react-relay'

function commit(environment, input) {
  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      mutation: graphql`
        mutation signInMutation($input: SignInInput!) {
          signIn(input: $input) {
            clientMutationId
            user {
              id
              fullName
              token
              email
            }
          }
        }
      `,

      variables: { input },
  
      onCompleted(data, errors) {
        if (errors) {
          reject(errors)
          return
        }

        resolve(data)
      },

      onError: reject,

      updater(store) {
        console.log(store)

        // const user = store.getRootField('signIn').getLinkedRecord('user')
        // store.getRoot().setLinkedRecord(user, 'me')
      },
    })
  })
}

export default { commit }
 