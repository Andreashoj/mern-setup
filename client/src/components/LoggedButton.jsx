import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

const LoggedButton = () => {
  const { user, fetchUser, handleLogin, handleLogout } = useContext(
    UserContext
  );

  let btn;
  if (user) {
    btn = <button onClick={handleLogout}>Logout</button>;
  } else {
    btn = <button onClick={handleLogin}>Login</button>;
  }

  return btn;
};

export default LoggedButton;
