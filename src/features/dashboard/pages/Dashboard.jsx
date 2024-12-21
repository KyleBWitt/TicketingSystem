import React from 'react';
import { Bar, Line } from 'react-chartjs-2'; // Your chart imports
import { Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend, 
    LineController, 
    BarController, 
    RadialLinearScale, 
    PointElement, 
    ArcElement, 
    LineElement } from 'chart.js'; // Your chartjs imports

// Register necessary chart components and elements
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    LineController,
    BarController,
    RadialLinearScale,
    PointElement,
    ArcElement,
    LineElement
);

// Example chart data
const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'Sales Data',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: 'rgba(255, 87, 34, 0.7)',
            borderColor: 'rgba(255, 87, 34, 1)',
            borderWidth: 1,
        },
    ],
};

const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Website Traffic',
            data: [30, 50, 40, 70, 90],
            fill: false,
            borderColor: 'rgba(255, 87, 34, 1)',
            tension: 0.1,
        },
    ],
};

const Dashboard = () => {
    return (
        <div style={{ backgroundColor: '#1f1f1f', color: '#fff', minHeight: '100vh', padding: '20px' }}>
            <h1>Dashboard</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {/* Bar Chart */}
                <div style={{ width: '48%' }}>
                    <h3>Sales Data (Bar Chart)</h3>
                    <Bar data={barData} options={{ responsive: true }} />
                </div>

                {/* Line Chart */}
                <div style={{ width: '48%' }}>
                    <h3>Website Traffic (Line Chart)</h3>
                    <Line data={lineData} options={{ responsive: true }} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
