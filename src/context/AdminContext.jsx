import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

// Create the context
const AdminContext = createContext();

// Custom hook for accessing the context
export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  // Initialize authentication state from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      const saved = localStorage.getItem('adminAuth');
      return saved ? JSON.parse(saved) : false;
    } catch (error) {
      console.error('Error loading admin auth from localStorage:', error);
      return false;
    }
  });

  // Sync authentication state with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('adminAuth', JSON.stringify(isAuthenticated));
    } catch (error) {
      console.error('Error saving admin auth to localStorage:', error);
    }
  }, [isAuthenticated]);

  // Login function to authenticate the admin
  const login = (credentials) => {
    // Simulate authentication (replace with actual auth logic, e.g., API call)
    // For demo purposes, accept any non-empty username/password
    if (credentials.username && credentials.password) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  // Logout function to clear authentication
  const logout = () => {
    setIsAuthenticated(false);
    try {
      localStorage.removeItem('adminAuth');
    } catch (error) {
      console.error('Error removing admin auth from localStorage:', error);
    }
  };

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      isAuthenticated,
      login,
      logout,
    }),
    [isAuthenticated]
  );

  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
};

// Export default for the provider
export default AdminProvider;