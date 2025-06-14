import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AdminProvider, useAdmin } from "./context/AdminContext"
import { ProjectsProvider } from "./context/ProjectsContext"; 
import AdminPanel from "./pages/AdminPanel";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Test from "./pages/Test";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ProtectedRoute component to restrict access to authenticated users
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAdmin();
  return isAuthenticated ? children : <Navigate to="/" />;
}

// Layout component for non-admin pages with Header
function MainLayout() {
  return (
    <div>
      <Header />
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AdminProvider>
        <ProjectsProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<Test />} />
                <Route path="/about" element={<About />} />
                <Route path="/Portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/adminPanel" element={<AdminPanel />} />
              </Route>
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminPanel />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </BrowserRouter>
        </ProjectsProvider>
      </AdminProvider>
    </ThemeProvider>
  );
}

export default App;
