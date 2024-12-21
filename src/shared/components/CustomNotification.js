import React from 'react';
import '../../assets/CustomNotification.css'; // Import the custom CSS file for the notification

const CustomNotification = ({ message, type, onClose }) => {
  return (
    <div className={`custom-notification ${type}`} onClick={onClose}>
      <span>{message}</span>
    </div>
  );
};

export default CustomNotification;  // Ensure this is the default export

