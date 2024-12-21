import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Adjust the path as needed
import Dashboard from '../features/dashboard/pages/Dashboard';
import CreateIncidentForm from '../features/incident-tickets/pages/CreateIncidentForm';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-incident" element={<CreateIncidentForm />} />
      </Routes>
    </>
  );
};

export default App;
