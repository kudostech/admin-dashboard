import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import ProductsPage from './components/ProductsPage';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import UsersPage from './components/UsersPage'; // <-- Import UsersPage
import ThemeContextProvider from './context/ThemeContextProvider';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const Layout = ({ children }) => (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
        <Navbar onToggleSidebar={() => setIsSidebarOpen(prev => !prev)} />
        {children}
      </div>
    </div>
  );

  return (
    <ThemeContextProvider>
      <Router>
        <Routes>
          {/* Login Route */}
          <Route path="/login" element={<Login onLogin={setIsAuthenticated} />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Layout>
                  <Dashboard />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/users"
            element={
              isAuthenticated ? (
                <Layout>
                  <UsersPage />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          {/* 👇👇 NEW PRODUCTS ROUTE 👇👇 */}
          <Route
            path="/products"
            element={
              isAuthenticated ? (
                <Layout>
                  <ProductsPage />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
