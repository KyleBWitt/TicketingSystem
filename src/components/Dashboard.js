import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, RadarController, PolarAreaController, LineController, BarController } from 'chart.js';
import { Bar, Radar, PolarArea, Line } from 'react-chartjs-2';

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadarController, // Register the Radar controller
  PolarAreaController, // Register the PolarArea controller
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

  // Example data for the Radar chart
  const radarData = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [
      {
        label: 'Comparison',
        data: [90, 60, 70, 80, 85],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Example data for the Polar Area chart
  const polarData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        label: 'Colors',
        data: [10, 20, 30, 40, 50],
        backgroundColor: ['#FF0000', '#0000FF', '#FFFF00', '#00FF00', '#800080'],
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
          <h3>Sales Data (Bar Chart)</h3>
          <Bar data={barData} options={{ responsive: true }} />
        </div>
        
        {/* Radar Chart */}
        <div style={{ width: '48%' }}>
          <h3>Comparison Data (Radar Chart)</h3>
          <Radar data={radarData} options={{ responsive: true }} />
        </div>
        
        {/* Polar Area Chart */}
        <div style={{ width: '48%' }}>
          <h3>Colors Distribution (Polar Area Chart)</h3>
          <PolarArea data={polarData} options={{ responsive: true }} />
        </div>
        
        {/* Line Chart */}
        <div style={{ width: '48%' }}>
          <h3>Website Traffic (Line Chart)</h3>
          <Line data={lineData} options={{ responsive: true }} />
        </div>

        {/* Add more charts if needed */}
        {/* You can continue adding similar chart blocks here with different data and chart types */}
      </div>
    </div>
  );
};

export default Dashboard;
