import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

describe('Bound the User Interface actions', () => {
  it('should return correct value for login action creator', () => {
    const result = login('diego@nomadengineers.io', 'sike!');
    expect(result).toEqual({ type: LOGIN, user: { email: 'diego@nomadengineers.io', password: 'sike!' } });
  });

  it('logging out', () => {
    const logginOut = logout();
    expect(logginOut).toEqual({ type: LOGOUT });
  });

  it('display notification', () => {
    const displayingNotification = displayNotificationDrawer();
    expect(displayingNotification).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  });

  it('swipe away notification', () => {
    const hideNotification = hideNotificationDrawer();
    expect(hideNotification).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
});
