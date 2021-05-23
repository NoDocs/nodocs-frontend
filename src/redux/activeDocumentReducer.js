import { fromJS } from 'immutable'

const initialState = fromJS({
  id: '',
  activeSectionId: '',
  activePageId: '',
  openedDocumentIds: [],
})

const activeDocumentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'document/INITIALIZE_DOCUMENT': {
      const { document } = action.payload

      const activePage = document.pages[0]

      return state
        .set('id', document.id)
        .set('activePageId', activePage.id)
        .update('openedDocumentIds', ids => ids.includes(document.id) ? ids : ids.push(document.id))
    }

    case 'document/SWITCH_SECTION': {
      return state.set('activePageId', action.payload.pageId)
    }

    default: {
      return state
    }
  }
}

export default activeDocumentReducer
