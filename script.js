const generatedQuotes = [];


async function fetchText() {
    let response = await fetch('https://api.kanye.rest');
    let data = await response.json();
    document.getElementById('quotetext').innerHTML = "\""+data.quote+"\"";;
    generatedQuotes.push(data.quote);
    console.log(generatedQuotes)
}