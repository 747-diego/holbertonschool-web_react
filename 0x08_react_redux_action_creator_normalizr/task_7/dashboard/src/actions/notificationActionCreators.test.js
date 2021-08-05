import { markAsRead, setNotificationFilter } from './notificationActionCreators';
import {NotificationTypeFilters, MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

describe('actions for notification list', () => {
  it('notification read', () => {
    const read = markAsRead(1);
    expect(read).toEqual({ type: MARK_AS_READ, index: 1 });
  });

  it('default notification filter', () => {
    const defaultFilter = setNotificationFilter(NotificationTypeFilters.DEFAULT);
    expect(defaultFilter).toEqual({ type: SET_TYPE_FILTER, filter: 'DEFAULT' });
  });

  it('urgent notification filter', () => {
    const urgentFilter = setNotificationFilter(NotificationTypeFilters.URGENT);
    expect(urgentFilter).toEqual({ type: SET_TYPE_FILTER, filter: 'URGENT' });
  });
});
