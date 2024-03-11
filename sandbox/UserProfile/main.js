import "clam.css"; // Import the Clam CSS framework

// ad-hoc coding

const Person = function(profile) {
  this.profile = profile;
}

/**
 * This async function fetches a random user from the randomuser.me API. It is declared as an async function because we don't want to block the main thread while we wait for the response. In other words, we don't want to freeze the UI while we wait for the response.
 * @returns {Promise<Person>}
 */
const assignRandomUserAsync = async function() {
  let temp;
  await fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      temp = new Person(data.results[0]);
    })
    .catch(error => console.error(error));
  return temp;
}


const newUserButton = document.getElementById('new-user');
newUserButton.addEventListener('click', async function() {
  // The await keyword is used to paush the execution of the function until the promise is resolved. You can only use await keywords on async functions AND you must have the containing function be async as well.
  let user = await assignRandomUserAsync();
  console.log(user);
  const userCard = document.getElementById('user-info');
  console.log(userCard);
  if(user === undefined) {
    userCard.innerHTML = `<h2>Failed to fetch user</h2>`;
    return;
  } else {
    // I am using a template literal string to create the HTML as a string. When I put the string into the .innerHTML of my userCard, the browser will parse the string and create the elements for me.
    userCard.innerHTML = `
      <img src="${user.profile.picture.large}" alt="profile picture">
      <h2>${user.profile.name.first} ${user.profile.name.last}</h2>
      <p>${user.profile.email}</p>
      <p>${user.profile.location.city}, ${user.profile.location.state}</p>
    `;
  }
});
