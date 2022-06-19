/* eslint-disable no-console */
class StorageManager {
  static setItem = (key: Required<string>, data: any) => {
    if (typeof window !== 'undefined') {
      try {
        const serializedState = JSON.stringify(data);
        localStorage.setItem(key, serializedState);
      } catch {
        // ignore write errors
      }
    }
  };

  static getItem = (key: Required<string>): any | undefined => {
    if (typeof window !== 'undefined') {
      try {
        const serializedState = localStorage.getItem(key);

        if (serializedState === null) {
          return;
        }

        return JSON.parse(serializedState);
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  static removeItem = (key: Required<string>) => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(key);
      } catch {
        // ignore write errors
      }
    }
  };

  static clear = () => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.clear();
      } catch {
        // ignore write errors
      }
    }
  };
}

export default StorageManager;
