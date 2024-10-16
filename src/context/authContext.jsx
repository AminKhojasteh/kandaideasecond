import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = function ({ children }) {
  const [user, setUser] = useState("");

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
