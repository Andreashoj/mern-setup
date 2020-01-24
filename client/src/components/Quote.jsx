import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Quote = () => {
  const [quote, setQuote] = useState("");

  const fetchQuote = () => {
    fetch("https://favqs.com/api/qotd")
      .then(response => response.json())
      .then(data => setQuote(data.quote))
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <QuoteContainer>
      <QuoteText>
        "{quote.body}" <br /> <br />- {quote.author}
      </QuoteText>
    </QuoteContainer>
  );
};

const QuoteContainer = styled.div`
  width: 50%;
`;

const QuoteText = styled.p`
  font-family: helvetica;
  color: white;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export default Quote;
