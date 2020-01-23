import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import styled from "styled-components";

const LoggedButton = () => {
  const { user, fetchUser, handleLogin, handleLogout } = useContext(
    UserContext
  );

  useEffect(() => {
    fetchUser();
  }, []);

  let btn;
  if (user) {
    btn = <LoginHeader>Features in development.</LoginHeader>;
  } else {
    btn = (
      <LoginHeader>
        <span onClick={handleLogin}>Log in,</span> for more features
      </LoginHeader>
    );
  }

  return btn;
};

const LoginHeader = styled.p`
  color: white;
  font-size: 40px;
  margin: 50px 0 0 0;
  span {
    border-bottom: 2px solid white;
    cursor: pointer;
  }
`;

export default LoggedButton;
