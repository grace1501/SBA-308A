// APP IDEA: A webpage to display mock users (from Reqres API) with their favorite programming quote (from Programming Quotes API)
// A website visitor can register with their info using the form, and have the option to add their favorite quote or have one randomly generated in their profile


import * as Quotes from './Quotes.js';
import * as Cards from './Cards.js';
import './Form.js';

// This will fill the page with content when first loaded
loadPage();

////////////////////////////
// GET METHOD

async function getUserArr() {
    const response = await fetch('https://reqres.in/api/users');
    console.log(response)
    const resjson = await response.json();
    return resjson.data;
}

function loadPage() {
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
}



///////////////////////////////////
// POST METHOD

// Gather all data from the form elements
const form = document.querySelector('form');
console.log(form.elements);

const firstName = form.elements['first-name'];
const lastName = form.elements['last-name'];
const email = form.elements['email'];
const quote = form.elements['quote'];
const author = form.elements['author'];


function addNewUser(e) {
    e.preventDefault();
    console.log('running');
    
    const newUser = {
        "email": email.value,
        "first_name": firstName.value,
        "last_name": lastName.value,
    }

    if (quote.value.length < 0) {
        console.log('No favorite quote - will get you one')
        Quotes.getAQuote().then((quote) => {
            newUser.favQuote = quote;
            console.log(newUser.favQuote)
        })

    } else {
        newUser.favQuote = {
            "quote" : quote.value,
            "author" : author.value
        }
    }
    
    console.log('new user added')
    console.log(newUser)
    return newUser;
}


form.addEventListener('submit', addNewUser);


// get the favQuote if missing
async function addQuote(userObj) {
    if (!userObj.favQuote) {
        await Quotes.getAQuote().then((quote) => {
            console.log(quote);
            userObj.favQuote = quote;
        });
        
    } else {
        console.log(userObj.favQuote);
    }
}

// Take the new user data from the form and add to page


// addQuote()



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