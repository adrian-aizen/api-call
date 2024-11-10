document.getElementById('quoteButton').addEventListener('click', function() {
  const animeName = document.getElementById('anime-name').value;
  if (animeName) {
      getQuoteByAnime(animeName);
  } else {
      alert('Please enter an anime name.');
  }
});

function getQuoteByAnime(animeName) {
  fetch(`https://animechan.io/api/v1/quotes/anime?title=${encodeURIComponent(animeName)}`)
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
          const quote = data[Math.floor(Math.random() * data.length)];
          document.getElementById('quote-text').innerText = `"${quote.quote}"`;
          document.getElementById('quote-character').innerText = `- ${quote.character}`;
          document.getElementById('quote-anime').innerText = `from ${quote.anime}`;

          const quotesContainer = document.getElementById('quotes-container');
          quotesContainer.classList.remove('hidden');

          document.getElementById('searched-anime').innerText = `Searched Anime: ${animeName}`;
      } else {
          alert('No quotes found for this anime. Please try another one.');
          document.getElementById('quotes-container').classList.add('hidden');
      }
    })
    .catch(error => {
      console.error('Error fetching quote:', error);
      alert('An error occurred while fetching the quote. Please try again later.');
    });
}