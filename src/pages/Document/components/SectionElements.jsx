import React from 'react'
import { useSelector } from 'react-redux'

import { documentSelectors } from 'logic/document'

const SectionElements = () => {
  const content = useSelector(documentSelectors.selectPageProperty('content'))
  const elements = JSON.parse(content)

  return elements.map(curr => {
    if (curr.type === 'paragraph') {
      return <div key={curr.id}>Something</div>
    }
  })
}

export default SectionElements
