import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Article = ({ article }) => {
  const [articleObj, setArticleObj] = useState({
    title: article.title,
    image: article.cover_image,
    published: article.readable_publish_date,
    tags: article.tag_list,
    user: article.user.name,
    link: article.url
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
        <div className="article-details">
          {articleObj.tags
            ? articleObj.tags.map(tag => {
                return <span key={tag}>{handleUppercase(tag)}</span>;
              })
            : null}
        </div>
        <h4>{articleObj.title}</h4>
        <span>
          {articleObj.published} by {articleObj.user} -{" "}
          <a href={articleObj.link} target="_blank">
            Read article.
          </a>
        </span>
      </div>
    </ArticleContainer>
  );
};

const ArticleContainer = styled.div`
  font-family: "helvetica";
  z-index: 1;
  padding: 15px;
  margin: 10px 0;
  display: flex;
  color: #0a1826;
  font-weight: 500;
  a {
    text-decoration: none;
    font-weight: 600;
  }
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
  }
  h4 {
    margin: 0 0 0 12px;
    font-size: 16px;
  }
  span {
    color: #1b1e23;
    padding: 0px 0px 0 10px;
    margin: 0 2px;
    font-size: 14px;
    color: #797979;
  }
  .article-details {
    display: flex;
    flex-direction: row;
  }
`;

export default Article;
