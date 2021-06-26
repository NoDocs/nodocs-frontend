import React from 'react'
import PropTypes from 'prop-types'
import { usePreloadedQuery } from 'react-relay'

import DocumentIcon from 'assets/document.svg'

import SearchQuery from './graphql/SearchQuery'
import SearchResultItem from './components/SearchResultItem'

const SearchResults = ({ queryReference }) => {
  const { search } = usePreloadedQuery(SearchQuery, queryReference)

  const handleItemClick = item => () => {
    alert(JSON.stringify(item))
  }

  return search.map(searchResult => (
    <SearchResultItem
      key={searchResult.id}
      id={searchResult.neuronId}
      icon={<DocumentIcon color="white" size={24} />}
      label={searchResult.name}
      onClick={handleItemClick(searchResult)}
    />
  ))
}

SearchResults.propTypes = {
  queryReference: PropTypes.any,
}

export default SearchResults
