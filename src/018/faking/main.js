import { injectTableData } from './carLot/dataGenerator.js'

const log = console.log;

// TODO: Disabled until I can figure out how to get the seed working
//       consistently. Apparently, the seed can be used to get consisten
//       data, BUT the specs (https://fakerjs.dev/api/faker.html#seed) say
//          "... generated values are dependent on both the seed
//           and the number of calls that have been made since it was set."
//       See docs here: https://fakerjs.dev/guide/
const changeSeed = function(ev) {
    const currentSeed = ev.target.value
    log(`Regenerating data with seed: '${currentSeed}'`);

    // Get the current URL
    const url = new URL(location.href);

    // Set the desired query parameter
    if(currentSeed)
        url.searchParams.set('seed', currentSeed);

    // Reload the page with the updated query string
    location.assign(url.search);
}

const urlParams = new URLSearchParams(window.location.search);
const seed = urlParams.get('seed');
log(`querystring seed=${seed}`);

const dropDown = document.getElementById('faker-seed');
if(seed)
    dropDown.value = seed;
const carLot = document.getElementById('carLot');
injectTableData(carLot, seed);

dropDown.addEventListener('change', changeSeed);

