import notificationsData from '../../../../notifications.json';
import { schema, normalize } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', { author: user, context: message, });
const normalizedNotification = normalize(notificationsData, [notification]);

const getAllNotificationsByUser = (userId) => {
  // const context = notificationsData.filter(object => object.author.id === userId)
  //   .map(object => object.context);
  // return context;
  const filterDataset = [];
  const objects = normalizedNotification.entities.notificationsData;
  for (const id in objects) {
    if (objects[id].author === userId) {
      filterDataset.push(normalizedNotification.entities.messages[objects[id].context]);
    }
  }
  return (filterDataset);
};

export default { getAllNotificationsByUser, normalizedNotification };
