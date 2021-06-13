import { graphql } from 'react-relay'

const SearchQuery = graphql`
  query SearchQuery($search: String!) {
    search (search: $search) {
      id
      type
      name
    }
  }
`

export default SearchQuery
