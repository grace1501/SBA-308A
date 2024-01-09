// This module is to get the random programming quotes from Programming Quotes API https://programming-quotesapi.vercel.app/


export async function getAQuote() {
    try {
        const response = await fetch("https://programming-quotesapi.vercel.app/api/random");
        const quote = await response.json();
        return quote;
    }
    catch(err) {
        console.log(err);
    }
}

export async function getTenQuotes() {
    try {
        const response = await fetch("https://programming-quotesapi.vercel.app/api/bulk");
        const quotesArr = await response.json();
        return quotesArr;
    }
    catch(err) {
        console.log(err);
    }
}

// getAQuote().then(result => {
//     console.log(result);
// })


