import React from 'react';
import { NotificationWrapp } from '../Notification/Notification.styled';

export default function Notification() {
  return (
    <NotificationWrapp className="notificationBlock">
      <p className="notificationText">There is no feedback</p>
    </NotificationWrapp>
  );
}
