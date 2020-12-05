import React from 'react'
import shortid from 'shortid'
import { useSelector } from 'react-redux'

import * as documentServices from 'services/document'
import { documentSelectors } from 'logic/document'
import Label from 'atoms/Label'

const CreatePage = () => {
  const activeSectionId = useSelector(documentSelectors.selectActiveSectionId)

  const onCreate = () => {
    documentServices
      .createPage({
        content: JSON.stringify([{ type: 'paragraph', id: shortid.generate(), children: [{ text: '' }] }]),
        pageId: shortid.generate(),
        sectionId: activeSectionId,
        title: 'Untitled !'
      })
  }

  return (
    <Label color="black" onClick={onCreate}>Create Page</Label>
  )
}

export default CreatePage
