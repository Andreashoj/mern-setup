import React, { Component } from "react";
import styled from "styled-components";

const DevNews = () => {
  return (
    <News>
      <p>Read some dev news</p>
    </News>
  );
};

const News = styled.div`
  p {
    position: relative;
    color: white;
    font-size: 25px;
    cursor: pointer;
    &:hover {
      &:before {
        width: 155px;
      }
    }
    &:before {
      position: absolute;
      content: "";
      top: 40px;
      height: 2.5px;
      background-color: white;
      width: 70px;
      transition: all 0.3s ease;
    }
  }
`;

export default DevNews;
