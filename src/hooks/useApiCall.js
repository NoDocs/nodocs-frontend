import React from 'react'
import { useSelector } from 'react-redux'

const useApiCall = ({ apiService, onResolve, selectors = () => {} }) => {
  const [loading, toggleLoading] = React.useState(false)
  const additionalParams = useSelector(selectors)

  const sendRequest = (apiParams) => {
    toggleLoading(true)

    apiService({ ...apiParams, ...additionalParams })
      .then(onResolve)
      .catch(error => {
        // capture important errors that require some action
        console.log(error, 'error')
      })
      .finally(() => toggleLoading(false))
  }

  return {
    loading,
    sendRequest,
  }
}

export default useApiCall
