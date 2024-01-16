import React, { useState, useEffect } from "react";
import { cleanQuotes, changeQuote } from "./functions";

const QuoteComponent = ({ colour }) => {
  // State for storing quotes and the index of the current quote to display
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState(0);

  // State logic
  useEffect(() => {
    // Fetch quotes from the specified API
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        // Remove "type.fit" from the author field, if present
        const cleanedQuotes = cleanQuotes(data)
        // Set State logic
        setQuotes(cleanedQuotes);
      })
      // Catch function for Error
      .catch((error) => console.error("Error fetching quotes:", error));
  }, []);

  // Core return section
  return (
    <div className="react-component quote-component">
      <h2>Random Quotes</h2>
      <p style={{ color: colour }}>{quotes[currentQuote]?.text}</p>
      <p>- {quotes[currentQuote]?.author}</p>
      <button onClick={() => changeQuote(quotes, setCurrentQuote)}>Change Quote</button>
    </div>
  );
};

export default QuoteComponent;
