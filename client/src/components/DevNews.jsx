import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";
import Article from "./Article";

const DevNews = () => {
  const [news, setNews] = useState();
  const [clicked, setClicked] = useState(false);
  const ShowHide = clicked ? "show" : "hide";
  const transitions = useTransition(clicked, null, {
    from: { transform: "translate3d(0,-20px,0)", opacity: 0 },
    enter: { transform: "translate3d(0,0px,0)", opacity: 1 },
    leave: { transform: "translate3d(0,-20px,0)", opacity: 0 }
  });

  const fetchNews = () => {
    fetch("https://dev.to/api/articles/?key=Xjuj2yoRk6JWFpXNHEWWLnBj")
      .then(response => response.json())
      .then(data => {
        data.length = 3;
        setNews(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <News>
      <p onClick={() => setClicked(!clicked)}>Read some dev news</p>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.div style={props}>
            <NewsContainer>
              {news.map(article => (
                <Article article={article} />
              ))}
            </NewsContainer>
          </animated.div>
        ) : null
      )}
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

const NewsContainer = styled.div`
  position: absolute;
  right: -2px;
  width: 400px;
  height: auto;
  max-height: 400px;
  background-color: white;
  margin-top: -22px;
  transition: all 0.3s ease;
  .show {
    height: 180px;
  }
`;

export default DevNews;
