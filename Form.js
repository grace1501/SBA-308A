// This module handles all functionalities relating to register form

import * as Cards from './Cards.js'
import * as Quotes from './Quotes.js'

const form = document.querySelector('form');
console.log(form.elements);

const firstName = form.elements['first-name'];
const lastName = form.elements['last-name'];
const email = form.elements['email'];
const quote = form.elements['quote'];
const author = form.elements['author'];

export function addNewUser(e) {
    e.preventDefault();

    const newUser = {
        "email": email.value,
        "first_name": firstName.value,
        "last_name": lastName.value,
    }

    if (quote.value.length < 0) {
        console.log('No favorite quote - will get you one')
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

