import { graphql } from 'react-relay'

const SearchQuery = graphql`
  query SearchQuery($search: String!) {
    search (search: $search) {
      __typename

      ... on Document {
        name
        pages {
          title
        }
      }

      ... on Neuron {
        name
      }
    }
  }
`

export default SearchQuery
