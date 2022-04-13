import React, { createContext, useEffect, useState } from "react";

const LoginContextAuth = createContext({
  isLogged: false,
  onLogout: () => {},
  onLogin: (emailAuth, passwordAuth) => {},
});

export const LoginContext = (props) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const loginInformation = localStorage.getItem("isLogged");
    if (loginInformation === "1") {
      setIsLogged(true);
    }
  }, []);

  const logoutHandle = () => {
    setIsLogged(false);
  };

  const loginHandle = () => {
    setIsLogged(true);
  };

  return (
    <LoginContextAuth.Provider
      value={{
        isLogged: isLogged,
        onLogout: logoutHandle,
        onLogin: loginHandle,
      }}
    >
      {props.children}
    </LoginContextAuth.Provider>
  );
};

export default LoginContextAuth;
