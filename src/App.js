import React, { useContext } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import LoginContextAuth from "./context/LoginContext";

function App() {
  const checkLogin = useContext(LoginContextAuth);
  return (
    <>
      <Header />
      <main style={{ marginTop: 100 }}>
        {!checkLogin.isLogged && <Login />}
        {checkLogin.isLogged && <Home />}
      </main>
    </>
  );
}

export default App;
