import notificationsData from '../../../../notifications.json';

const getAllNotificationsByUser = (userId) => {
  const context = notificationsData.filter(object => object.author.id === userId)
    .map(object => object.context);
  return context;
};

export default getAllNotificationsByUser;
