import * as documentActionTypes from './documentActionTypes'

export const createDocument = document => ({
  type: documentActionTypes.CREATE_DOCUMENT,
  payload: document,
})

export const putDocuments = ({ groupId, documents }) => ({
  type: documentActionTypes.PUT_DOCUMENTS,
  payload: {
    groupId,
    documents,
  },
})

export const initializeDocument = (document) => ({
  type: documentActionTypes.INITIALIZE_DOCUMENT,
  payload: {
    document,
  },
})

export const attachTag = ({ tag, documentId }) => ({
  type: documentActionTypes.ATTACH_TAG,
  payload: {
    tag,
    documentId
  },
})

export const createTag = ({ tag }) => ({
  type: documentActionTypes.CREATE_TAG,
  payload: {
    tag,
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

export const clearDocument = () => ({
  type: documentActionTypes.CLEAR_DOCUMENT,
  payload: {},
})

export const updateDocument = ({ documentId, title }) => ({
  type: documentActionTypes.UPDATE_DOCUMENT,
  payload: {
    documentId,
    title,
  }
})
