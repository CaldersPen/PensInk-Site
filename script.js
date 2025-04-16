
const quotes = [
  { text: "Injustice anywhere is a threat to justice everywhere.", source: "Martin Luther King Jr." },
  { text: "The pen is mightier than the sword.", source: "Edward Bulwer-Lytton" },
  { text: "Writing is the painting of the voice.", source: "Voltaire" },
  { text: "Fill your paper with the breathings of your heart.", source: "William Wordsworth" },
  { text: "You can make anything by writing.", source: "C.S. Lewis" }
];

let usedIndexes = [];

const quoteEl = document.getElementById('quote');
const sourceEl = document.getElementById('source');

function setRandomPosition() {
  const padding = 60;
  const maxLeft = window.innerWidth - quoteEl.offsetWidth - padding;
  const maxTop = window.innerHeight - quoteEl.offsetHeight - padding;
  const left = Math.floor(Math.random() * maxLeft);
  const top = Math.floor(Math.random() * maxTop);
  quoteEl.style.left = `${left}px`;
  quoteEl.style.top = `${top}px`;
}

function showQuote() {
  if (usedIndexes.length === quotes.length) usedIndexes = [];
  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (usedIndexes.includes(index));
  usedIndexes.push(index);

  const quote = quotes[index];
  quoteEl.style.fontFamily = 'Simone Kimber';
  quoteEl.textContent = quote.text;
  sourceEl.textContent = quote.source;
  setRandomPosition();

  quoteEl.classList.remove('show');
  sourceEl.classList.remove('show');
  void quoteEl.offsetWidth;
  void sourceEl.offsetWidth;
  quoteEl.classList.add('show');
  sourceEl.classList.add('show');

  setTimeout(showQuote, 29000);
}

setTimeout(showQuote, 7000);
