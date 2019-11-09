import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Redirect } from "react-router-dom";

const Secret = () => {
  const { user, fetchUser, handleRedirect } = useContext(UserContext);

  useEffect(() => {
    fetchUser();
    console.log(user);
  }, []);

  if (user) {
    return <div>{user.username}</div>;
  } else {
    return <Redirect to="/" />;
  }
};

export default Secret;
