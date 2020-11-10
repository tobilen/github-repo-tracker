import * as React from 'react';

export const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [storedValue, setStoredValue] = React.useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: React.SetStateAction<T>): T => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    try {
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
    return valueToStore;
  };

  return [storedValue, setValue];
};
