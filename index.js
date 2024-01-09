// APP IDEA: A webpage to display mock users (from Reqres API) with their favorite programming quote (from Programming Quotes API)
// A website visitor can register with their info using the form, and have the option to add their favorite quote or have one randomly generated in their profile

import * as Quotes from './Quotes.js';
import * as Cards from './Cards.js';

async function testGet() {
    const response = await fetch('https://reqres.in/api/users');
    console.log(response)
    const data = await response.json();
    console.log(data);
}

// testGet()

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