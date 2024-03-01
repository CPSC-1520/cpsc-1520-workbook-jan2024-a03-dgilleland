import { Faker, en } from 'https://esm.sh/@faker-js/faker';

let faker;

const Vehicle = function(type, vin, license, color, odometer) {
    this.type = type;
    this.vin = vin;
    this.license = license;
    this.color = color;
    this.odometer = odometer;
    this.testDrive = function(distance) {
        const change = parseInt(distance);
        if(!isNaN(change))
            this.odometer += change;
        return change;
    }
}

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

const generateLot = function(max) {
    const lot = [];
    for(var count = 0; count < max; count++) {
        lot.push(generateVehicle());
    }
    return lot;
}

const generateTableRows = function() {
    const lot = generateLot(10);
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

const injectTableData = function(element, seed) {
    // seed = seed || Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER);
    // Reset with a new faker
    const options = { locale: [en,en]};
    faker = new Faker(options);
    if(seed) faker.seed(seed);

    console.log("seed:", seed);
    const data = generateTableRows();
    element.innerHTML = `<table>${data}</table>`;
}

// I will make public only the exported items from
// this JavaScript module file
export { injectTableData, Vehicle };
