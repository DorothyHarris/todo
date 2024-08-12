import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Login from "../Login/Login.tsx";
import Register from "../Register/Register.tsx";
import axios from "axios";

const AuthRootComponent = () => {
  const [email, SetEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const location = useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      email,
      password,
    };
    console.log(userData);
    const user = await axios.post("http://localhost:3000/auth/login", userData);
  };

  return location.pathname === "/" ? (
    <Login
      setEmail={SetEmail}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  ) : location.pathname === "/register" ? (
    <Register />
  ) : null;
};

export default AuthRootComponent;
