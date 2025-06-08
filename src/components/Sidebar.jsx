import React from 'react';
import { FaTachometerAlt, FaShoppingCart, FaUsers, FaUser, FaBox, FaCog } from 'react-icons/fa';

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`
        fixed top-0 left-0 h-full bg-gray-100 text-gray-900 px-4 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white
        w-64
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:flex-shrink-0
      `}
    >
      <h1 className='text-2xl font-bold hidden md:block mt-4 text-center italic'>CWY Shop</h1>
      <ul className='flex flex-col mt-5 text-xl'>
        <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
          <FaTachometerAlt />
          <span className='hidden md:inline'>Dashboard</span>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:text-white hover:bg-blue-600">
          <FaShoppingCart />
          <span className="hidden md:inline ">Orders</span>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:text-white hover:bg-blue-600">
          <FaUsers />
          <span className="hidden md:inline ">Customers</span>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:text-white hover:bg-blue-600">
          <FaUser />
          <span className="hidden md:inline ">Users</span>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:text-white hover:bg-blue-600">
          <FaBox />
          <span className="hidden md:inline ">Products</span>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:text-white hover:bg-blue-600">
          <FaCog />
          <span className="hidden md:inline ">Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
