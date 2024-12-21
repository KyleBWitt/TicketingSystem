import React, { useState } from 'react';
import IncidentForm from '../components/IncidentForm'; // Assuming you have the IncidentForm component
import { createIncident } from '../api/createIncidentApi'; // Import the createIncident API function

const CreateIncidentForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleFormSubmit = async (formData) => {
    setLoading(true);
    setError(null); // Reset error before submission
    try {
      const newIncident = await createIncident(formData); // Call the API function
      console.log('Incident created:', newIncident);
      setSuccess(true); // Indicate success
    } catch (err) {
      setError('Failed to create incident');
      console.error('Error creating incident:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-incident-form">
      <h2>Create New Incident</h2>
      {error && <div className="error">{error}</div>} {/* Show error if there is one */}
      {success && <div className="success">Incident created successfully!</div>} {/* Success message */}
      <IncidentForm onSubmit={handleFormSubmit} /> {/* Pass handleFormSubmit as onSubmit */}
      {loading && <div>Loading...</div>} {/* Show loading spinner or message while submitting */}
    </div>
  );
};

export default CreateIncidentForm;
