import "clam.css"; // Import the Clam CSS framework

// ad-hoc coding

const Person = function(profile) {
  this.profile = profile;
}

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
  let user = await assignRandomUserAsync();
  console.log(user);
});
