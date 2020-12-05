import { createSelector } from 'reselect'

const notificationDomain = state => state.get('notifications')

export const selectAllNotifications = () => createSelector(notificationDomain, notifications => notifications)
