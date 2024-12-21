import axios from 'axios';

export const createIncident = async (incidentData) => {
    try {
        const response = await axios.post('https://localhost:44372/api/incidents', incidentData);
        return response.data;
    } catch (error) {
        console.error('Error creating incident:', error);
        throw new Error('Failed to create incident');
    }
};
