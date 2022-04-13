import React, { createContext, useEffect, useState } from "react";

const LoginContextAuth = createContext({
  isLogged: false,
});

const LoginContext = (props) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const loginInformation = localStorage.getItem("isLogged");
    if (loginInformation === "1") {
      setIsLogged(true);
    }
  }, []);

  const logoutHandle = () => setIsLogged(false);

  const loginHandle = () => setIsLogged(true);

  return (
    <LoginContextAuth
      value={{
        isLogged: isLogged,
        logoutHandle: logoutHandle,
        loginHandle: loginHandle,
      }}
    >
      {props.chidren}
    </LoginContextAuth>
  );
};

export default LoginContext;
