"use client";

import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  function refreshLoginState(data) {
    setUser(data);
  }

  return (
    <AuthContext.Provider value={{ user, refreshLoginState }}>
      {children}
    </AuthContext.Provider>
  );
}
