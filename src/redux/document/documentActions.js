import * as documentActionTypes from './documentActionTypes'

export const createDocument = document => ({
  type: documentActionTypes.CREATE_DOCUMENT,
  payload: document,
})

export const putDocuments = ({ collectionId, documents }) => ({
  type: documentActionTypes.PUT_DOCUMENTS,
  payload: {
    collectionId,
    documents,
  },
})

export const initializeDocument = (document) => ({
  type: documentActionTypes.INITIALIZE_DOCUMENT,
  payload: {
    document,
  },
})

export const createSection = section => ({
  type: documentActionTypes.CREATE_SECTION,
  payload: {
    section,
  },
})

export const switchSection = ({ sectionId, pageId }) => ({
  type: documentActionTypes.SWITCH_SECTION,
  payload: {
    sectionId,
    pageId,
  },
})
