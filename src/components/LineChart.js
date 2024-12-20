// src/components/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  // Chart data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue',
        data: [120, 190, 300, 500, 200, 300],
        borderColor: '#FF9800', // Orange line color
        backgroundColor: 'rgba(255, 152, 0, 0.2)', // Orange fill
        pointBackgroundColor: '#FF9800',
        tension: 0.4, // Smooth curve
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#E0E0E0', // Light gray legend text
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: { color: '#E0E0E0' }, // Light gray x-axis text
        grid: { color: '#444444' }, // Dark grid lines
      },
      y: {
        ticks: { color: '#E0E0E0' }, // Light gray y-axis text
        grid: { color: '#444444' }, // Dark grid lines
      },
    },
  };

  return (
    <div className="card">
      <h2 className="chart-title">Monthly Revenue</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
