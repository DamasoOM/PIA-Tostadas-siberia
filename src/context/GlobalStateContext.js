// context/GlobalStateContext.js
import React, { createContext, useState } from 'react';

// Crear el contexto
export const GlobalStateContext = createContext();

// Crear el proveedor del contexto
export const GlobalStateProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    isAuthenticated: false,
    role: null,
  });

  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};