import { graphql, commitMutation } from 'react-relay'

function commit(environment, input, file) {
  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      mutation: graphql`
        mutation attachFileToPageMutation($input: UploadFileInput!) {
          uploadFile(input: $input) {
            clientMutationId
            file {
              name
              url
            }
          }
        }
      `,

      variables: { input },

      uploadables: {
        file,
      },

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
 