import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      return initialValue;
    } catch (error) {
      console.error(`Error setting initial value for "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
    } catch (error) {
      console.error(`Error setting value for "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};
