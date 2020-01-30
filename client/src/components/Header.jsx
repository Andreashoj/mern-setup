import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import styled from "styled-components";

const Header = () => {
  const { user } = useContext(UserContext);
  const [name, setName] = useState();
  const [greeting, setGreeting] = useState("");
  const d = new Date();
  const [hour, setHour] = useState(() => d.getHours());
  const [minute, setMinute] = useState(
    (d.getMinutes() < 10 ? "0" : "") + d.getMinutes()
  );

  useEffect(() => {
    if (hour >= 3 && hour < 10) {
      setGreeting("morning");
    } else if (hour >= 10 && hour < 17) {
      setGreeting("day");
    } else {
      setGreeting("evening");
    }
  }, [minute]);

  useEffect(() => {
    if (user) {
      const name = user.username.split(" ").slice(0, 1);
      setName(name);
    }
  }, [user]);

  const UpdateTime = () => {
    const date = new Date();
    const currentSecond = date.getSeconds();
    if (currentSecond === 0) {
      const newMinute = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
      setMinute(newMinute);
    }
  };
  setInterval(UpdateTime, 1000);

  return (
    <GreetingContainer>
      <Time>{d.getHours() + " : " + minute}</Time>
      <h3>
        Have a good {greeting} {name ? ", " + name : null}.
      </h3>
    </GreetingContainer>
  );
};

const Time = styled.h1`
  color: white;
  font-size: 130px;
  font-weight: 400;
  margin-bottom: 0;
  text-align: center;
`;

const GreetingContainer = styled.div`
  h3 {
    text-align: center;
    font-size: 70px;
    color: white;
    font-weight: 400;
    margin-top: -50px;
    top: 10px;
  }
`;

export default Header;
