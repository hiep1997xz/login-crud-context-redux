import React, { useContext } from "react";
import LoginContextAuth from "../../context/LoginContext";
import "./Header.css";

const Header = () => {
  const checkLogin = useContext(LoginContextAuth);

  return (
    <div className="header">
      <h1>Project Tranning</h1>
      <div className="navigation">
        <ul>
          {checkLogin.isLogged && (
            <li>
              <a href="/">User</a>
            </li>
          )}
          {checkLogin.isLogged && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {checkLogin.isLogged && (
            <li>
              <button onClick={checkLogin.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
