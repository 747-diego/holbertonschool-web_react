import notificationsData from '../../../../notifications.json';
import { schema, normalize } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', { author: user, context: message, });
const normalizedNotification = normalize(notificationsData, [notification]);

const getAllNotificationsByUser = (userId) => {
  const context = notificationsData.filter(object => object.author.id === userId)
    .map(object => object.context);
  return context;
};

export default { getAllNotificationsByUser, normalizedNotification };
