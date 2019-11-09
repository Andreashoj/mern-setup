import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(false);
  const [error, setError] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const { user, fetchUser } = useContext(UserContext);

  return (
    <form action="POST" onSubmit={e => handleSubmit(e)}>
      <button onClick={() => fetchUser()}>User?</button>
    </form>
  );
};

export default RegisterForm;
