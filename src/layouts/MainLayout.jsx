import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as authServices from 'services/auth'
import * as documentServices from 'services/document'
import { authActions } from 'logic/auth'
import { documentActions } from 'logic/document'
import history from 'utils/history'

const MainLayout = ({ children }) => {
  const userId = useSelector(state => state.getIn(['auth', 'id']))
  const dispatch = useDispatch()

  React.useEffect(
    () => {
      if (userId) return
      if (!localStorage.getItem('token')) return

      const handleThen = (response) => {
        dispatch(authActions.signIn(response.data))
      }

      const handleCatch = (error) => {
        if (error.message === 'NotAuthorized') {
          localStorage.clear()
          history.push('/login')
        }
      }

      authServices
        .me()
        .then(handleThen)
        .catch(handleCatch)

      documentServices
        .getDocuments()
        .then(response => dispatch(documentActions.putDocuments(response.data)))
    },
    []
  )

  return userId
    ? children
    : <div>Loading user...</div>
}

export default MainLayout
