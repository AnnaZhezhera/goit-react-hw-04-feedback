import React, { Component } from 'react';
import { NotificationWrapp } from '../Notification/Notification.styled';

class Notification extends Component {
  render() {
    return (
      <NotificationWrapp className="notificationBlock">
        <p className="notificationText">There is no feedback</p>
      </NotificationWrapp>
    );
  }
}

export default Notification;
