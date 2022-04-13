import React, { useContext } from "react";
import LoginContextAuth from "../../context/LoginContext";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import "./Home.css";

const Home = () => {
  const authCtx = useContext(LoginContextAuth);
  return (
    <Card className="home">
      <h1>Welcome back!</h1>
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
