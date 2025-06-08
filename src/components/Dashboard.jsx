import React from 'react';
import UserTable from './UserTable';
import SalesChart from './SalesChart';
import ProductCategoryPieChart from './ProductCategoryPieChart';
import UserProfileForm from './UserProfileForm';
import UserGrowthChart from './UserGrowthChart';
import Card from './Card';
import { FaBox, FaCog, FaShoppingCart, FaUsers } from 'react-icons/fa';
import { dataLine, dataBar } from '../assets/chartData';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement);

function Dashboard() {
  const summaryData = [
    { icon: <FaShoppingCart />, title: 'Orders', value: 140 },
    { icon: <FaBox />, title: 'Products', value: 120 },
    { icon: <FaUsers />, title: 'Users', value: 30 },
    { icon: <FaCog />, title: 'Settings', value: 11 },
  ];

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summaryData.map((item, index) => (
          <Card key={index} icon={item.icon} title={item.title} value={item.value} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-medium mb-4">Sales Data</h3>
          <Line data={dataLine} />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-medium mb-4">Products Data</h3>
          <Bar data={dataBar} />
        </div>
      </div>

      {/* User Growth */}
      <div className="mb-8">
        <UserGrowthChart />
      </div>

      {/* User Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
        <h3 className="text-lg font-medium mb-4">Users Table</h3>
        <UserTable />
      </div>

      {/* Profile Form */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
        <h3 className="text-lg font-medium mb-4">User Profile Form</h3>
        <UserProfileForm />
      </div>

      {/* Pie Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-lg font-medium mb-4">Product Categories</h3>
        <ProductCategoryPieChart />
      </div>
    </div>
  );
}

export default Dashboard;
