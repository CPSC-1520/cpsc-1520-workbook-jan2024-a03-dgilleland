let firstPerson = {
firstName: 'Fred',
lastName: 'Flintstone',
birthDay: 'May 1, 1960',
get fullName() {
return this.firstName + ' ' + this.lastName;
},
get age() {
let bornOn = new Date(this.birthDay);
let today = new Date();
let age = today.getFullYear() - bornOn.getFullYear();
let monthDiff = today.getMonth() - bornOn.getMonth();
if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < bornOn.getDate())) {
age--;
}
return age;
}
}
firstPerson.fullName
firstPerson.age
let nextPerson = {
firstName: 'Fred',


}}
let nextPerson = {
firstName: 'Wilma',
lastName: 'Slaghoople',
birthDay: 'June 4, 1962',
get fullName() {
return this.firstName + ' ' + this.lastName;
}
,
set marriedTo(person) {
this.lastName = person.lastName;
}
}
console.clear()
firstPerson
nextPerson
nextPerson.marriedTo = firstPerson
nextPerson
/* Object Initializers are a great way to create "one-off" objects on the fly,
but if we want any consistency in the kind of object we want (such as when we
intend on creating more than one of a particular object), then we can use the
Object Constructor pattern */
console.clear()
function Person(firstName, lastName, dateOfBirth) {
// "generate" properties on the 'this' instanceof

this.firstName = firstName;
this.lastName = lastName;
this.birthDay = new Date(dateOfBirth); // note that we use the Date object constructor
this.marry = function(otherPerson) { 
this.spouse = otherPerson;
}
}
Person.toString()
let barney = new Person('Barney', 'Rubble', 'May 5, 1960');
let betty = new Person('Betty', 'McBricker', 'Aug 12, 1963');
barney
betty
console.clear()
/* The rule of thumb is, if you want multiple instances of the same type of object, use Object Constructors, but if you want 
just ad-hoc objects, then object literals are fine. An added benefit of using Object Constructors is that you can create
new properties/methods on all your object instances through the .prototype of the Object Constructor function */
barney
betty
firstPerson
Person.prototype.middleName = '';
barney
betty
barney.middleName
betty.middleName = 'Jean'
betty
Person.prototype. getFullName = function() {
return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
}
barney.getFullName()
betty.getFullName()
Person.prototype.background = 'This person is a fictional TV character';
barney
barney.background
betty.background
let instructor = new Person('Dan', 'Gilleland', 'July 1, 1965')
instructor.middleName
instructor.background
instructor.background = 'This is a real character; don't be deceived';
instructor.background = 'This is a real character; don\'t be deceived';
instructor.background
barney.background