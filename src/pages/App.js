import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../features/dashboard/pages/Dashboard';
import CreateIncidentForm from '../features/incident-tickets/pages/CreateIncidentForm'; // Use the correct page here

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create-incident" element={<CreateIncidentForm />} /> {/* Use CreateIncidentForm here */}
        </Routes>
    );
};

export default App;
