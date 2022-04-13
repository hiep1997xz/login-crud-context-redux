import React, { useContext, useEffect, useState } from "react";
import LoginContextAuth from "../../context/LoginContext";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState();

  const [password, setPasswrod] = useState("");
  const [validPassword, setValidPassword] = useState();

  const [formValid, setFormValid] = useState(false);

  const authLogin = useContext(LoginContextAuth);

  // disable button login
  useEffect(() => {
    const checkTimeout = setTimeout(() => {
      setFormValid(email.includes("@") && password.trim().length > 6);
    }, 500);

    return () => {
      clearInterval(checkTimeout);
    };
  }, [email, password]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const validateEmailHandler = () => {
    setValidEmail(email.includes("@"));
  };

  const handlePassword = (e) => {
    setPasswrod(e.target.value);
  };

  const validatePasswordHandler = () => {
    setValidPassword(password.trim().length > 6);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authLogin.onLogin(email, password);
  };

  return (
    <Card className="login">
      <form onSubmit={handleSubmit}>
        <div className={`control ${validEmail === false ? "invalid" : ""}`}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmail}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={`control ${validPassword === false ? "invalid" : ""}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className="actions">
          <Button type="submit" className="btn" disabled={!formValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
