import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import UserContextProvider from "./contexts/UserContext";
import LoggedButton from "./components/LoggedButton";
import styled from "styled-components";
import logo from "./assets/devdash.svg";
import { useCookies, Cookies } from "react-cookie";
import Header from "./components/Header";

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
  }, []);

  return (
    <UserContextProvider>
      <Container background={background}>
        <div className="upper-row">
          <div>
            <p>Read some dev news</p>
          </div>
        </div>
        <div className="middle-row">
          <Header />
          <LoggedButton />
        </div>
        <div className="bottom-row"></div>
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
  font-family: 'Teko', sans-serif;
  .upper-row {
    width: 90%;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    img {
      opacity: 0.8;
    }
    p {

      color: white;
      font-size: 25px;
      cursor: pointer;
    }
  }
  .middle-row {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default App;
