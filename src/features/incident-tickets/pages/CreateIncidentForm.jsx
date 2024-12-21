import React, { useState, useEffect } from 'react';
import CustomNotification from '../../../shared/components/CustomNotification'; // Import custom notification
import IncidentForm from '../components/IncidentForm'; // Assuming you have the IncidentForm component
import { createIncident } from '../api/createIncidentApi'; // Import the createIncident API function

const CreateIncidentForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleFormSubmit = async (formData) => {
    setLoading(true);
    setError(null); // Reset error before submission
    try {
      const newIncident = await createIncident(formData); // Call the API function
      console.log('Incident created:', newIncident);
      setSuccess(true); // Indicate success
      setNotification({
        message: 'Incident created successfully!',
        type: 'success',
      });
    } catch (err) {
      setError('Failed to create incident');
      console.error('Error creating incident:', err);
      setNotification({
        message: 'An error occurred while creating the incident.',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseNotification = () => {
    setNotification(null); // Close the notification when clicked
  };

  useEffect(() => {
    // Automatically close notification after 3 seconds (adjust as needed)
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null); // Dismiss notification after 3 seconds
      }, 3000);
      return () => clearTimeout(timer); // Clear timeout if component unmounts or notification changes
    }
  }, [notification]);

  return (
    <div className="create-incident-form">

      {error && <div className="error">{error}</div>} {/* Show error if there is one */}
      {success && <div className="success">Incident created successfully!</div>} {/* Success message */}
      <IncidentForm onSubmit={handleFormSubmit} /> {/* Pass handleFormSubmit as onSubmit */}
      {loading && <div>Loading...</div>} {/* Show loading spinner or message while submitting */}

      {/* Show custom notification if it exists */}
      {notification && (
        <CustomNotification
          message={notification.message}
          type={notification.type}
          onClose={handleCloseNotification}
        />
      )}
    </div>
  );
};

export default CreateIncidentForm;
