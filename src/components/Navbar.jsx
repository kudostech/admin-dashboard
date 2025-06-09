import React, { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeCotext } from '../context/ThemeContextProvider';

const Navbar = ({ onToggleSidebar }) => {
  const { theme, toggleTheme } = useContext(ThemeCotext);

  return (
    <header className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600 px-4 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-3">
        {/* Sidebar toggle for small screens */}
        <button
          className="p-2 mr-2 focus:outline-none"
          onClick={onToggleSidebar}
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1 className="text-lg md:text-xl font-semibold">Dashboard</h1>
      </div>

      {/* Theme toggle button */}
      <button
        onClick={toggleTheme}
        className="text-2xl text-gray-800 dark:text-white focus:outline-none"
      >
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
    </header>
  );
};

export default Navbar;
