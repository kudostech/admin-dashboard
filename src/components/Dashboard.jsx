import React from 'react'
import UserTable from "./UserTable"; 
import SalesChart from './SalesChart';
import ProductCategoryPieChart from './ProductCategoryPieChart';
import UserProfileForm from "./UserProfileForm";
import UserGrowthChart from "./UserGrowthChart";
import Card from './Card'
import { FaBox, FaCog, FaShoppingCart, FaUsers } from 'react-icons/fa'
import { dataLine, dataBar } from '../assets/chartData'
import {Line, Bar} from 'react-chartjs-2'
import {Chart as ChartJS, LineElement, BarElement, CategoryScale, LinearScale, PointElement} from 'chart.js'
ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement)

function Dashboard() {
    const summaryData = [
        { icon: <FaShoppingCart />, title: "Orders", value: 140 },
        { icon: <FaBox />, title: "Products", value: 120 },
        { icon: <FaUsers />, title: "Users", value: 30 },
        { icon: <FaCog />, title: "Settings", value: 11 },
      ];
  return (
    <div className='grow p-8'>
        <h2 className='text-2xl mb-4'>Dashboard</h2>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
  {summaryData.map((item, index) => (
    <Card key={index} icon={item.icon} title={item.title} value={item.value} />
  ))}
</div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md'>
                <h3 className='text-lg font-semibold mb-4'>Sales Data</h3>
                <Line data={dataLine} />
            </div>
            <div className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md'>
                <h3 className='text-lg font-semibold mb-4'>Products Data</h3>
                <Bar data={dataBar} />
            </div>
        </div>
        <UserGrowthChart />
        <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen p-4">
  <UserTable />
</div>
        <UserProfileForm />
        <SalesChart />
        < ProductCategoryPieChart />
    </div>
  )
}

export default Dashboard