async function getQuotes() {  
    const quotes = 'quote.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    console.log(data);
  }
  getQuotes();