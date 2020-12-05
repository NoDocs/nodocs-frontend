import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { notificationActions } from 'logic/notification'
import Label from 'atoms/Label'

const StyledContainer = styled.div`
  background-color: ${({ error }) => error ? 'red' : 'green'};
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  color: #fff;
`

const Notification = ({ type, message, id }) => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(notificationActions.deleteNotification({ id }))
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const isError = React.useMemo(() => type === 'error', [type])

  return (
    <StyledContainer error={isError}>
      <Label color="active">{message}</Label>
    </StyledContainer>
  )
}

Notification.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  message: PropTypes.string,
}

export default Notification
