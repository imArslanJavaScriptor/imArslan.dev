import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";

// Create the context
const ThemeContext = createContext();

// Custom hook for accessing the context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Initialize theme based on localStorage or system preference
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved !== null) {
        return JSON.parse(saved);
      }
      // Fallback to system preference
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch (error) {
      console.error("Error loading theme from localStorage:", error);
      // Default to light mode on error
      return false;
    }
  });

  // Sync theme with localStorage and document class
  useEffect(() => {
    try {
      localStorage.setItem("theme", JSON.stringify(isDark));
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch (error) {
      console.error("Error saving theme to localStorage:", error);
    }
  }, [isDark]);

  // Toggle theme between light and dark
  const toggleTheme = () => setIsDark((prev) => !prev);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      isDark,
      toggleTheme,
    }),
    [isDark]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Export default for the provider
export default ThemeProvider;
