import React, { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { ThemeCotext } from '../context/ThemeContextProvider'

const Navbar = ({ onToggleSidebar }) => {
    const { theme, toggleTheme } = useContext(ThemeCotext)

    return (
        <div className='bg-gray-100 text-gray-900 border-b border-gray-300 p-4 flex justify-between items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white'>
            <div className='flex items-center'>
                {/* Hamburger button - only visible on small screens */}
                <button
                    className='md:hidden p-2 mr-2 focus:outline-none'
                    onClick={onToggleSidebar}
                >
                    <svg
                        className='w-6 h-6 text-gray-800 dark:text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                    </svg>
                </button>
                <h1 className='text-xl font-semibold'>Dashboard</h1>
            </div>

            {/* Theme toggle button */}
            <button className='text-2xl text-dark' onClick={toggleTheme}>
                {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
        </div>
    )
}

export default Navbar
