import React, { useState, useEffect } from 'react';

const QuoteComponent = () => {
  // State for storing quotes and the index of the current quote to display
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    // Fetch quotes from the specified API
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => {
        // Remove "type.fit" from the author field, if present
        const cleanedQuotes = data.map(quote => ({
          text: quote.text,
          author: cleanAuthor(quote.author) || 'Unknown Author',
        }));
        setQuotes(cleanedQuotes);
      })
      .catch(error => console.error('Error fetching quotes:', error));
  }, []);

  // Function to clean the author field by removing "type.fit" if present
  const cleanAuthor = author => {
    return author ? author.replace(/,?\s?type\.fit$/, '').trim() : null;
  };

  // Function to change the current quote to a random one
  const changeQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(randomIndex);
  };

  // Core return section
  return (
    <div>
      <h2>Random Quotes</h2>
      <p>{quotes[currentQuote]?.text}</p>
      <p>- {quotes[currentQuote]?.author}</p>
      <button onClick={changeQuote}>Change Quote</button>
    </div>
  );
};

export default QuoteComponent;