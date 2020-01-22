import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import UserContextProvider from "./contexts/UserContext";
import LoggedButton from "./components/LoggedButton";
import styled from "styled-components";
import logo from "./assets/devdash.svg";
import { useCookies, Cookies } from "react-cookie";

function App() {
  const [background, setBackground] = useState();
  const [cookies, setCookies, removeCookies] = useCookies(["background"]);
  const cookie = new Cookies();

  const getBackground = () => {
    const backgroundURL = cookie.get("background-cookie");
    console.log(background, backgroundURL);
    const tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);
    if (backgroundURL !== undefined) {
      setBackground(backgroundURL);
    } else {
      fetch("https://source.unsplash.com/1600x900/?background,relax").then(
        background => {
          setBackground(background.url);
          setCookies("background-cookie", background.url, {
            expires: tomorrow
          });
        }
      );
    }
  };

  useEffect(() => {
    getBackground();
    console.log(background);
  }, []);

  return (
    <UserContextProvider>
      <Container background={background}>
        <div className="first-row">
          <img src={logo} alt="Dev dash logo" />
        </div>
        <LoggedButton />
      </Container>
    </UserContextProvider>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url('${props => props.background}');
  display: flex;
  align-items: center;
  flex-direction: column;
  .first-row {
    width: 90%;
    img {
      opacity: 0.8;
    }
  }
`;

export default App;
