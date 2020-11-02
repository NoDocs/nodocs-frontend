import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as authServices from 'services/auth'
import { authActions } from 'logic/auth'
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
    },
    []
  )

  return userId
    ? children
    : <div>Loading user...</div>
}

export default MainLayout
