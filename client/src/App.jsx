import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import UserContextProvider from "./contexts/UserContext";
import LoggedButton from "./components/LoggedButton";
import styled from "styled-components";
import logo from "./assets/devdash.svg";
import { useCookies, Cookies } from "react-cookie";
import Header from "./components/Header";
import DevNews from "./components/DevNews";
import Quote from "./components/Quote";

function App() {
  const [background, setBackground] = useState();
  const [cookies, setCookies, removeCookies] = useCookies(["background"]);
  const cookie = new Cookies();

  const getBackground = () => {
    const backgroundURL = cookie.get("background-cookie");
    const tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);
    if (backgroundURL !== undefined) {
      setBackground(backgroundURL);
    } else {
      fetch(
        `https://source.unsplash.com/${window.innerWidth}x${window.innerHeight}/?background,relax`
      ).then(background => {
        setBackground(background.url);
        setCookies("background-cookie", background.url, {
          expires: tomorrow
        });
      });
    }
  };

  useEffect(() => {
    getBackground();
  }, []);

  return (
    <UserContextProvider>
      <Container background={background}>
        <div className="background-opacity"></div>
        <div className="upper-row">
          <DevNews />
        </div>
        <div className="middle-row">
          <Header />
          <LoggedButton />
        </div>
        <div className="bottom-row">
          <Quote />
        </div>
      </Container>
    </UserContextProvider>
  );
}

const Container = styled.div`
position: relative;
overflow: hidden;
  height: 100vh;
  width: 100%;
  background-image: url('${props => props.background}');
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: 'Teko', sans-serif;
  .upper-row {
    width: 90%;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    z-index: 0;
    img {
      opacity: 0.8;
    }
  }
  .middle-row {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 0;
  }
  .bottom-row {
    display: flex;
    justify-content: center;
    z-index: 0;
  }
 .background-opacity {
    position: absolute;
    height: 100vh;
    width: 100%;
    opacity: 0.2;
    background-color: black;
  }
`;

export default App;
