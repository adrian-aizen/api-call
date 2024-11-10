function getRandomAnimeQuote() {
    fetch('https://animechan.io/api/v1/quotes/random')
      .then(response => response.json())
      .then(quote => {
        console.log(quote); // Log the entire quote object to the console
        
        // Populate the quote container with the fetched data
        document.getElementById('quote-text').innerText = `"${quote.quote}"`;
        document.getElementById('quote-character').innerText = `- ${quote.character}`;
        document.getElementById('quote-anime').innerText = `from ${quote.anime}`;
        
        // Show the quotes container
        const quotesContainer = document.getElementById('quotes-container');
        quotesContainer.classList.remove('hidden');
      })
      .catch(error => {
        console.error('Error fetching quote:', error);
      });
}