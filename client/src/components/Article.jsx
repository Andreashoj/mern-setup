import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Article = ({ article }) => {
  const [articleObj, setArticleObj] = useState({
    title: article.title,
    image: article.cover_image,
    published: article.readable_publish_date,
    tags: article.tag_list
  });

  useEffect(() => {
    let articleTitle = article.title.split(/(\S+\s+)/).filter(function(n) {
      return n;
    });
    articleTitle.length = 6;
    articleTitle = articleTitle.join(" ");
    setArticleObj(prevState => ({
      ...prevState,
      title: articleTitle
    }));
  }, []);

  const handleUppercase = s => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <ArticleContainer>
      <img src={articleObj.image} alt="" />
      <div className="article-details-container">
        <h4>{articleObj.title}</h4>
        <div className="article-details">
          {articleObj.tags
            ? articleObj.tags.map(tag => {
                return <span key={tag}>{handleUppercase(tag)}</span>;
              })
            : null}
          <span>{articleObj.published}</span>
        </div>
      </div>
    </ArticleContainer>
  );
};

const ArticleContainer = styled.div`
  font-family: "helvetica";
  padding: 10px;
  margin: 10px 0;
  display: flex;
  color: #0a1826;
  font-weight: 500;
  img {
    height: 64px;
    width: 64px;
    object-fit: cover;
  }
  .article-details-container {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
    justify-content: space-between;
    width: 100%;
  }
  h4 {
    margin: 0;
    font-size: 16px;
  }
  span {
    color: #1b1e23;
    padding: 5px 10px;
    margin: 0 2px;
    border: 1px solid black;
    color: black;
  }
  .article-details {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default Article;
