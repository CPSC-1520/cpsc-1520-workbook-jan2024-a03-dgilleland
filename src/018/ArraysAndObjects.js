let nothing = {}
nothing
nothing.size = 42
nothing
nothing.grow = function() {
this.size++;
}
nothing
nothing.grow()
nothing
nothing.length
console.table(nothing)
nothing['size']
nothing.self = nothing
nothing
nothing.self.grow()
nothing.size
nothing.self.size
console.clear()
nothing['nothing']
nothing['self']
nothing = {
info: 'I think therefore I am',
name: 'I have no name that I know of',
age: 42,
knowledge: true
}
console.clear()
let names = [];
names.push('Fred');
names.push('Wilma');
names.push('Barney');
names.push('Betty');
console.log(names);
console.table(names);
let person = {
firstName: 'Fred',
lastName: 'Flintstone',
married: true,
age: 32
}
let otherPerson = {
firstName: 'Wilma',
lastName: 'Flintstone',
married: true,
age: 30
}
names[0] = person // assign an object into an element of my array
names
for(item in names) {
console.log(item);
}
for(item of names) {
console.log(item);
}
typeof names
names instanceof Array
names instanceof Object
person instanceof Array
person instanceof Object
const isArray = function(thing) { return thing instanceof Array; }
names.forEach(isArray)
let result;
result = names.map(isArray)
const isObject = function(thing) { return thing instanceof Object; }
result = names.map(isObject)
const getType = function(thing) { return typeof thing; }
result = names.map(getType)
const cls = console.clear
cls()
names.map(function(item, index, array) {
return {
parent: array,
element: item,
position: index
}
})
cls()
let temp = 'bob'
instanceof temp === 'string'
instanceof temp
instanceOf temp
typeof temp
const isString = function(thing) { typeof temp === 'string'; }
const isAString = function(thing) { return typeof thing === 'string'; }
names.map(isAString)
names.filter(isAString)
names.filter(isObject)
names.filter(isArray)