import React from 'react'
import debounce from 'lodash/debounce'

const useDebounce = ({ initialValue, service, interval = 2000 }) => {
  const [value, updateValue] = React.useState(initialValue)

  React.useEffect(
    () => { updateValue(initialValue) },
    [initialValue]
  )

  const debouncedService = React.useMemo(
    () => debounce(service, interval),
    []
  )

  const handleChange = ({ target: { value } }) => {
    updateValue(value)
    debouncedService(value)
  }

  return { value, handleChange }
}

export default useDebounce
