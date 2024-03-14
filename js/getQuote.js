const changeQuote = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

const findPromise = new Promise((resolve, reject) => {  
    const res = fetch('json/quote.json'); 
    resolve (res)
  })

  findPromise
  .then(result => result.json())
  .then(jsonData => {
    const randomQuote = () => Math.floor(Math.random()*(jsonData.length));
    const randomQuoteShow = () => {
      let numberOfrandomQuote = randomQuote();
      quote.textContent = "\"" + jsonData[numberOfrandomQuote].text + "\"";
      author.textContent = jsonData[numberOfrandomQuote].author
    }
    randomQuoteShow()
    changeQuote.addEventListener('click', randomQuoteShow);
  });
 