// All functionality with user cards display is in here

/*
    <div id="users-display" class="display-style">
        <div>
            <div class="card" style="width: 12rem;">
                <h4>User Name</h4>
                <img src="https://eu.ui-avatars.com/api/?name=John+Doe&size=128" alt="User avatar">
                <p>Email address</p>
                <q>Quote line</q>
                <p>Quote author</p>
            </div>
        </div>
    </div>
*/


// User data to test

const testUser = {
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://reqres.in/img/faces/1-image.jpg",
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
                <q><em>${userObj.favQuote.quote}</em></q>
                <p>${userObj.favQuote.author}</p>
            </div>`

    usersDisplay.prepend(newCard);
    // console.log("Card created");
}

createNewCard(testUser);
