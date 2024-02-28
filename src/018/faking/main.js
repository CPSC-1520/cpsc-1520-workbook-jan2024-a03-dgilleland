import { faker } from 'https://esm.sh/@faker-js/faker';

const log = console.log;

const generateVehicle = function() {
    // Return a random vehicle as an object literal
    return {
        type: faker.vehicle.vehicle(),
        vin: faker.vehicle.vin(),
        license: faker.vehicle.vrm(),
        color: faker.vehicle.color(),
        odometer: faker.string.numeric({ length: 6, allowLeadingZeros: true })
    }
};
// console.table(generateVehicle());

const generateLot = function(max, seed) {
    if(seed) faker.seed(seed);
    const lot = [];
    for(var count = 0; count < max; count++) {
        lot.push(generateVehicle());
    }
    return lot;
}
const carLot = document.getElementById('carLot');

// TODO: Create a tabular presentation of all the cars in the car lot, displaying each cars information.

// Ideas:
// - Use a template string for each row
// - Use a template string for the header row
// - Refactor the code to make it "clean"
const generateTable = function(seed) {
    const lot = generateLot(10, seed);
    const htmlRows = lot.map(function(vehicle, index){
        return `<tr>
    <td>${vehicle.type}</td>
    <td>${vehicle.vin}</td>
    <td>${vehicle.license}</td>
    <td>${vehicle.color}</td>
    <td>${vehicle.odometer}</td>
</tr>`;
    });
    return htmlRows.join('\n');
}
const data = generateTable(42);
log(data);
carLot.innerHTML = `<table>${data}</table>`;
