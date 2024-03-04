const Person = function(first, last, dob) {
this.firstName = first;
this.lastName = last;
this.birthday = new Date(dob);

this.fullName = function() {
return this.firstName + ' ' + this.lastName;
}
}
let fred = new Person('Fred', 'Flintstone', 'May 1, 1961')
let barney = new Person('Barney', 'Rubble', 'Feb 29, 1960')
let wilma = new Person('Wilma', 'Slaghoople', 'Aug 16, 1963')
let betty = new Person('Betty', 'McBricker', 'Oct 13, 1963')
let schoolmates = [ fred, barney, wilma, betty ]
wilma.fullName()
wilma.boyfriend = fred
wilma
wilma.boyfriend.fullName()
JSON.stringify(wilma, null, 2)
JSON.stringify(wilma)
let jsonData = JSON.stringify(fred)
jsonData
jsonData = JSON.stringify(fred, null, 2)
jsonData
let jsonObject = JSON.parse(jsonData)
jsonObject
jsonData = JSON.stringify(schoolmates, null, 2)
fred.girlfriend = wilma
wilma.boyfriend = null
JSON.stringify(fred)
jsonData = JSON.stringify(schoolmates, null, 2)
import * as fs from 'fs'
const fs = await import("fs")
fs
fs.writeFileSync('bedrockHighSchool.json', jsonData)