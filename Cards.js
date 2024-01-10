// All functionality with user cards display is in here

// User data to test

const testUser = {
        "id": 1,
        "email": "mike.doe@reqres.in",
        "first_name": "Mike",
        "last_name": "Doe",
        "avatar": "https://eu.ui-avatars.com/api/?name=Mike+Doe&size=128",
        "favQuote": {
            author: 'Douglas Crockford', 
            quote: 'JavaScript, purely by accident, has become the most popular programming language in the world.'
        }
    
}

const usersDisplay = document.getElementById("users-display");

export function createNewCard(userObj) {

    if (!userObj.avatar) {
        userObj.avatar = `https://eu.ui-avatars.com/api/?name=${userObj.first_name}+${userObj.last_name}&size=128`
    }

    const newCard = document.createElement('div');
    newCard.innerHTML = `
            <div class="card">
                <h4>${userObj.first_name} ${userObj.last_name}</h4>
                <img src="${userObj.avatar}" alt="User avatar">
                <p>${userObj.email}</p>
                <h5>Favorite quote:</h5>
                <q><em>${userObj.favQuote.quote}</em></q>
                <p>- ${userObj.favQuote.author} -</p>
            </div>`

    usersDisplay.prepend(newCard);
    // console.log("Card created");
}

createNewCard(testUser);
