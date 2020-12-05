import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import Notification from 'atoms/Notification'

import { notificationSelectors } from 'logic/notification'

const StyledContainer = styled.div`
  position: fixed;
  z-index: 1;
  top: 10px;
  right: 20px;
  display: flex;
  flex-direction: column;
`

const Notifications = () => {
  const notifications = useSelector(notificationSelectors.selectAllNotifications())
  
  return (
    <StyledContainer>
      {notifications.map(
        (notification, key) => (
          <Notification
            key={key}
            type={notification.get('type')}
            id={key}
            message={notification.get('message')}
          />
        ))
        .toList()
      }
    </StyledContainer>
  )
}

export default Notifications
