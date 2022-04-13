import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Project Tranning</h1>
      <div className="navigation">
        <ul>
          <li>
            <a href="/">User</a>
          </li>
          <li>
            <a href="/">Admin</a>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
