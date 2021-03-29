import { graphql, commitMutation } from 'react-relay'

function commit(environment, input) {
  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      mutation: graphql`
        mutation attachNeuronToPageMutation($input: AttachNeuronToPageInput!) {
          attachNeuronToPage(input: $input) {
            clientMutationId
            neuron {
              content
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
    })
  })
}

export default { commit }
 