import React, { useState } from "react";
import styled from "styled-components";
import search from "../assets/search.svg";

const Searchbar = ({ searchNews }) => {
  const [tag, setTag] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    searchNews(tag);
  };

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        onChange={e => setTag(e.target.value)}
        placeholder="search for articles"
      />
      <button type="submit">
        <img src={search} alt="" />
      </button>
    </Form>
  );
};

const Form = styled.form`
  width: 80%;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  input {
    width: 68%;
    margin-right: 5px;
  }
  img {
    width: 20px;
  }
  button,
  input {
    background-color: #e1e1e1;
    border: none;
    padding: 5px;
  }
`;

export default Searchbar;
