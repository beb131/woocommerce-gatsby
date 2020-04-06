import React, { useState } from "react";

import Auth from "../Auth/index";

export const AuthContext = React.createContext("");

const AuthWrapper = ({ children }) => {
  const [login, setLogin] = useState("");
  return (
    <>
      <Auth state={{ count: [login, setLogin] }} />
      <AuthContext.Provider value={{ token: login }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthWrapper;
