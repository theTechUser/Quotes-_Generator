document.addEventListener("DOMContentLoaded", function () {
   
    const quoteContainer = document.getElementById("quote-container");
    const quoteText = document.getElementById("quote");
    const quoteAuthor = document.getElementById("author");
    const twitterButton = document.getElementById("twitter");
    const newQuoteButton = document.getElementById("new-quote");
    const loader = document.getElementById("loader");

async function getQuote() {
    
    loader.hidden = false;
  
    try {
      
      const response = await fetch("https://api.quotable.io/random");
  
      if (!response.ok) {
        throw new Error(`Failed to fetch quote. Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      console.log("API Response:", data);
       
      loader.hidden = true;
      quoteText.textContent = data.content;
      quoteAuthor.textContent = data.author || "Unknown";
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  }
    
    function tweetQuote() {
      const quote = quoteText.textContent;
      const author = quoteAuthor.textContent;
      const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
      window.open(twitterUrl, "_blank");
    }
  
    newQuoteButton.addEventListener("click", getQuote);
    twitterButton.addEventListener("click", tweetQuote);
  
    getQuote();
  });