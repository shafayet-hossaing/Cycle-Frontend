import React, { createContext } from "react";
import useAuthProvider from "../Hooks/useAuthProvider";
export const NewContext = createContext();

const AuthProvider = ({ children }) => {
  const allContext = useAuthProvider();
  return (
    <NewContext.Provider value={allContext}>{children}</NewContext.Provider>
  );
};

export default AuthProvider;
