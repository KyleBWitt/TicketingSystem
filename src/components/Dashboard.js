import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineController, BarController } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController
);

const Dashboard = () => {
  // Example data for the Bar chart
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales Data',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };


  // Example data for the Line chart
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Website Traffic',
        data: [30, 50, 40, 70, 90],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {/* Bar Chart */}
        <div style={{ width: '48%' }}>
          <Bar data={barData} options={{ responsive: true }} />
        </div>
         
        {/* Line Chart */}
        <div style={{ width: '48%' }}>
          <Line data={lineData} options={{ responsive: true }} />
        </div>

        {/* Add more charts if needed */}
        {/* You can continue adding similar chart blocks here with different data and chart types */}
      </div>
    </div>
  );
};

export default Dashboard;
