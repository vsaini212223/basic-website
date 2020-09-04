function main() {
  const quoteH3 = document.querySelector(".quote"),
    quotes = [
      "What you think, you are.",
      "Don't cry because it is over. Smile because it happened.",
      "Be – Don't become.",
      "There is no path to happiness. Happiness is the path.",
    ],
    state = {
      quote: quotes[random(quotes.length)],
    };

  quoteH3.textContent = state.quote;

  document.querySelector(".randomize").addEventListener("click", function () {
    state.quote = quotes[random(quotes.length)];

    quoteH3.textContent = state.quote;
  });
}

function random(upper, lower = 0, padding = 0) {
  return Math.floor(Math.random() * (upper - lower)) + (lower + padding);
}

document.addEventListener("DOMContentLoaded", main);
