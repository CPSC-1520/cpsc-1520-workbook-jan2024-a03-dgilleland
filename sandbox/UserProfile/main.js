import "clam.css"; // Import the Clam CSS framework
import * as L from "leaflet"; // Import the Leaflet library
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
let map;
let marker;
const zoom = 13; // e.g.: 5, 8, 13
const loadMap = function(lat, long) {
  // This is a placeholder function for loading a map
  console.log(`Loading map at lat: ${lat}, long: ${long}`);

  if(map == undefined) {
    map = L.map('map');
    map.setView([lat, long], zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    marker = L.marker([lat, long]).addTo(map);
  } else {
    // NOTE: Still buggy - not resetting the map view
    map.invalidateSize();
    // map.off();
    map.flyTo([lat, long], zoom);
    marker.remove();
    marker = L.marker([lat, long]).addTo(map);
  }
  marker.bindPopup(`<b>Latitude:</b> ${lat}<br><b>Longitude:</b> ${long}`)
  .openPopup();
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
    loadMap(user.profile.location.coordinates.latitude, user.profile.location.coordinates.longitude);
  }
});
