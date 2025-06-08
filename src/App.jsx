import React, { useState } from 'react';
import './App.css';
import './index.css'; // Ensure Tailwind CSS is imported here
import Login from './components/Login';
import ProductsPage from './components/ProductsPage';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import UsersPage from './components/UsersPage';
import ThemeContextProvider from './context/ThemeContextProvider';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const Layout = ({ children }) => (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-1 ml-16 md:ml-64 flex flex-col">
        <Navbar onToggleSidebar={() => setIsSidebarOpen(prev => !prev)} />
        <main className="flex-1 p-6 md:p-8 lg:p-10 overflow-auto">
          <div className="max-w-7xl mx-auto w-full">{children}</div>
        </main>
      </div>
    </div>
  );

  return (
    <ThemeContextProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login onLogin={setIsAuthenticated} />} />
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
