// Function to remove "type.fit" from the author field, if present
export const cleanQuotes = (data) => {
  const returnValue = data.map((quote) => ({
    text: quote.text,
    author: cleanAuthor(quote.author) || "Unknown Author",
  }));
  return returnValue;
};

// Function to clean the author field by removing "type.fit" if present
// Component of cleanQuotes
const cleanAuthor = (author) => {
  return author ? author.replace(/,?\s?type\.fit$/, "").trim() : null;
};

// Function to change the current quote to a random one
export const changeQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  setCurrentQuote(randomIndex);
};
