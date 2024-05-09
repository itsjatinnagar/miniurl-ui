import { createContext, useContext, useRef } from "react";

const InputContext = createContext(null);

export default function InputProvider({ children }) {
  const inputRef = useRef(null);

  const setInputRef = (ref) => {
    inputRef.current = ref;
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <InputContext.Provider value={{ focusInput, setInputRef }}>
      {children}
    </InputContext.Provider>
  );
}

export const useInput = () => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
};
