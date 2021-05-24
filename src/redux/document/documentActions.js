import * as documentActionTypes from './documentActionTypes'

export const setActivePageId = ({ activePageId }) => ({
  type: documentActionTypes.SET_ACTIVE_PAGE_ID,
  payload: {
    activePageId,
  }
})

export const setActiveSectionId = ({ activeSectionId }) => ({
  type: documentActionTypes.SET_ACTIVE_SECTION_ID,
  payload: {
    activeSectionId,
  }
})

export const setActiveDocumentId = ({ documentId }) => ({
  type: documentActionTypes.SET_ACTIVE_DOCUMENT_ID,
  payload: {
    documentId,
  }
})
