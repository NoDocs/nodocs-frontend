import * as documentActionTypes from './documentActionTypes'

export const createDocument = ({ id, sections, creator }) => ({
  type: documentActionTypes.CREATE_DOCUMENT,
  payload: {
    id,
    sections,
    creator,
  }
})

export const putDocuments = (documents) => ({
  type: documentActionTypes.PUT_DOCUMENTS,
  payload: {
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
