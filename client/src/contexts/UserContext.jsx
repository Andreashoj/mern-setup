import React, { createContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

export const UserContext = createContext();

const UserContextProvider = props => {
  const [user, setUser] = useState();
  const [message, setMessage] = useState();

  const fetchUser = () => {
    fetch("http://localhost:5000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => {
        if (response.status === 200) return response.json();
      })
      .then(responseJson => {
        setUser(responseJson.user);
        setMessage(responseJson.message);
      });
  };

  const handleLogin = () => {
    window.open("http://localhost:5000/auth/login/google", "_self");
  };

  const handleLogout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  const handleRedirect = () => {
    return <Redirect to="/" />;
  };

  return (
    <UserContext.Provider
      value={{
        user,
        fetchUser,
        handleLogin,
        handleLogout,
        handleRedirect
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
