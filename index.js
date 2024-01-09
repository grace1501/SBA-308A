// APP IDEA: A webpage to display mock users (from Reqres API) with their favorite programming quote (from Programming Quotes API)
// A website visitor can register with their info using the form, and have the option to add their favorite quote or have one randomly generated in their profile


import * as Quotes from './Quotes.js';
import * as Cards from './Cards.js';
import * as Form from './Form.js';

////////////////////////////
// GET METHOD

async function getUserArr() {
    const response = await fetch('https://reqres.in/api/users');
    console.log(response)
    const resjson = await response.json();
    return resjson.data;
}

// get array of quotes to assign to each user object favQuote
Quotes.getTenQuotes().then((quotesArr) => {

    // get array of user data, then add the quote to each user
    getUserArr().then((userArr) => {
        for (let i=0; i<userArr.length; i++) {
            userArr[i].favQuote = quotesArr[i];
        }
    
    // Display user cards with quotes
    userArr.forEach(userObj => {
        Cards.createNewCard(userObj);
    });

    })
})
.catch((err) => {
    console.log(err);
})



///////////////////////////////////
// POST METHOD


// get the favQuote if missing
async function addQuote(userObj) {}


async function testPost() {
    let requestBody = { name: "paul rudd",
    favQuote: {
        author: "Richard Hamming",
        quote: "Any unwillingness to learn mathematics today can greatly restrict your possibilities tomorrow."
    } };

    const response = await fetch('https://reqres.in/api/users', 
    {method: 'POST',
    body: JSON.stringify(requestBody),
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
    }});

    
    const resjson = await response.json();
    console.log(resjson);
}

// testPost();