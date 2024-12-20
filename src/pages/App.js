import React from 'react';
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
         LineElement } from 'chart.js'; // Import missing elements
import { Bar, Line } from 'react-chartjs-2';

// Register necessary chart components and elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineController, // Line chart
  BarController,
  RadialLinearScale, // Register the radialLinear scale
  PointElement, // Register the point element for Radar
  ArcElement, // Register the arc element (used by PolarArea)
  LineElement // Register the line element for Line charts
);

// Global chart options for a Grafana-like dark theme
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: '#fff', // White for legend text
      },
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark background for tooltips
      titleColor: '#fff', // White title text in tooltips
      bodyColor: '#fff', // White body text in tooltips
    },
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)', // Subtle white grid lines on dark background
      },
      ticks: {
        color: '#fff', // White ticks for x-axis
      },
    },
    y: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)', // Subtle white grid lines on dark background
      },
      ticks: {
        color: '#fff', // White ticks for y-axis
      },
    },
  },
};

// Example data for the Bar chart
const barData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales Data',
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: 'rgba(255, 87, 34, 0.7)', // Deep orange
      borderColor: 'rgba(255, 87, 34, 1)', // Deep orange border
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
      borderColor: 'rgba(255, 87, 34, 1)', // Deep orange line
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
          <Bar data={barData} options={chartOptions} />
        </div>
        
        
        {/* Line Chart */}
        <div style={{ width: '48%' }}>
          <h3>Website Traffic (Line Chart)</h3>
          <Line data={lineData} options={chartOptions} />
        </div>

        {/* Add more charts if needed */}
        {/* You can continue adding similar chart blocks here with different data and chart types */}
      </div>
    </div>
  );
};

export default Dashboard;
