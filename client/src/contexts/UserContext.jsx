import React, { createContext, useState } from "react";
import { Redirect } from "react-router-dom";

export const UserContext = createContext();

const UserContextProvider = props => {
  const [user, setUser] = useState();
  const [message, setMessage] = useState();

  const fetchUser = () => {
    fetch("/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        accepts: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => {
        console.log(response);
        if (response.status === 200) return response.json();
      })
      .then(responseJson => {
        setUser(responseJson.user);
        setMessage(responseJson.message);
      });
  };

  const handleLogin = () => {
    window.open("/auth/login/google", "_self");
  };

  const handleLogout = () => {
    window.open("/auth/logout", "_self");
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
