import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ThemeProvider } from "./context/ThemeContext";
import ThemeProvider from "./context/ThemeProvider";
// import { AdminProvider, useAdmin } from "./context/AdminContext";
import ProjectProvider from "./context/ProjectProvider";
import { ToastContainer } from "react-toastify";
import { useTheme } from "./hooks/useTheme";

// Pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminPanel from "./pages/Admin";
// import NotFound from "./pages/NotFound"; // Added for 404

// Components
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import LoadingSpinner from "./components/common/LoadingSpinner"; // Added for Suspense

// Styles
import "./styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAdmin();
  if (!isAuthenticated) {
    // In production, redirect to login page or show auth modal
    return <AdminPanel />; // Renders login form from AdminPanel
  }
  return children;
};

function App() {
  const { isDark } = useTheme(); // For ToastContainer theme

  return (
    <ThemeProvider>
      <AdminProvider>
        <ProjectProvider>
          <Router basename={process.env.PUBLIC_URL || "/"}>
            {" "}
            {/* Support subpath deployment */}
            <ScrollToTop />
            <Header />
            <main
              id="main-content"
              aria-label="Main content"
              className="flex-1"
            >
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route
                    path="/admin"
                    element={
                      <ProtectedRoute>
                        <AdminPanel />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme={isDark ? "dark" : "light"} // Sync with ThemeContext
            />
          </Router>
        </ProjectProvider>
      </AdminProvider>
    </ThemeProvider>
  );
}

export default App;
