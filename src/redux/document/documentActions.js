import * as documentActionTypes from './documentActionTypes'

export const createDocument = ({ id, content, creator }) => ({
  type: documentActionTypes.CREATE_DOCUMENT,
  payload: {
    id,
    content,
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
