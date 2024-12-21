import React, { useState } from 'react';
import '../../../assets/IncidentForm.css'; // Import the CSS file

const IncidentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    // ticketId: '',
    // description: '',
    // createdDate: '',
    // createdBy: '',
    // priority: 'Low',
    // assignedTo: '',
    // status: 'open',  // You might want to set a default status
    // comments: [''],
    // attachments: [''],
    // isUrgent: false,
    // incidentDate: '',
    // affectedSystems: [''],
    // severity: 'Low',
    // rootCause: '',
    // resolution: '',
    ticketId: crypto.randomUUID(), 
    title: 'Weow',
    description: 'Gool',
    createdDate: new Date().toISOString().slice(0, 16), // Format the date for datetime-local input (yyyy-MM-ddThh:mm)
    createdBy: 'Me',
    priority: 1,
    assignedTo: 'You',
    status: 'open',
    comments: ['None'],
    attachments: [''],
    isUrgent: false,
    incidentDate: new Date().toISOString().slice(0, 16), // Format the date for datetime-local input (yyyy-MM-ddThh:mm)
    affectedSystems: ['All'],
    severity: 1,
    rootCause: 'You',
    resolution: 'None'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'comments' || name === 'attachments' || name === 'affectedSystems') {
      setFormData({
        ...formData,
        [name]: value.split(',').map(item => item.trim()), // Split comma-separated strings into arrays
      });
    } else if (name === 'isUrgent') {
      setFormData({
        ...formData,
        [name]: e.target.checked, // Handle checkbox for 'isUrgent'
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass the data to the parent component for handling submission
  };

  return (
    <form onSubmit={handleSubmit} className="incident-form">
      <h2>Create Incident</h2>

      <div className="form-group">
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe the incident..."
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Priority:</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Very High">Very High</option>
          </select>
        </div>

        <div className="form-group">
          <label>Severity:</label>
          <select
            name="severity"
            value={formData.severity}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Assigned To:</label>
        <input
          type="text"
          name="assignedTo"
          value={formData.assignedTo}
          onChange={handleChange}
          placeholder="Who is assigned to the ticket?"
        />
      </div>

      <div className="form-group">
        <label>Incident Date:</label>
        <input
          type="datetime-local"
          name="incidentDate"
          value={formData.incidentDate}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Affected Systems (comma separated):</label>
        <input
          type="text"
          name="affectedSystems"
          value={formData.affectedSystems.join(', ')}
          onChange={handleChange}
          placeholder="Enter affected systems"
        />
      </div>

      <div className="form-group">
        <label>Root Cause:</label>
        <input
          type="text"
          name="rootCause"
          value={formData.rootCause}
          onChange={handleChange}
          placeholder="What is the root cause?"
        />
      </div>

      <div className="form-group">
        <label>Resolution:</label>
        <input
          type="text"
          name="resolution"
          value={formData.resolution}
          onChange={handleChange}
          placeholder="How was it resolved?"
        />
      </div>

      <div className="form-group">
        <label>Comments (comma separated):</label>
        <input
          type="text"
          name="comments"
          value={formData.comments.join(', ')}
          onChange={handleChange}
          placeholder="Enter any comments"
        />
      </div>

      <div className="form-group">
        <label>Attachments (comma separated):</label>
        <input
          type="text"
          name="attachments"
          value={formData.attachments.join(', ')}
          onChange={handleChange}
          placeholder="Enter any attachments"
        />
      </div>

      <div className="form-group">
        <label>Is Urgent?</label>
        <input
          type="checkbox"
          name="isUrgent"
          checked={formData.isUrgent}
          onChange={handleChange}
        />
      </div>

      <div className="button-container">
        <button type="submit">Create Incident</button>
      </div>
    </form>
  );
};

export default IncidentForm;
