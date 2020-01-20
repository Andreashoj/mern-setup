import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import Secret from "./components/Secret";
import UserContextProvider from "./contexts/UserContext";
import LoggedButton from "./components/LoggedButton";

function App() {
  return (
    <Router>
      <UserContextProvider>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/secret">Secret</Link>
          <LoggedButton />
        </nav>

        <Switch>
          <Route path="/secret">
            <Secret />
          </Route>
          <Route path="/">
            <RegisterForm />
          </Route>
        </Switch>
      </UserContextProvider>
    </Router>
  );
}

export default App;
