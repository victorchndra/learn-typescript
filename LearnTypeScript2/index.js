// defining primitive data type
var myName = "Bob";
var numberOfWheels = 4;
var isStudent = false;
var favoriteFood = "pizza";
var person1 = {
    name: "Victor",
    age: 22,
    isStudent: false,
};
var person2 = {
    name: "Chandra",
    age: 18,
    isStudent: true,
    address: {
        street: 'Kulim',
        city: 'Pekanbaru',
        country: 'Riau'
    }
};
function displayInfo(person) {
    // console.log(`${person.name} lives at ${person.address?.street}`);
}
displayInfo(person1);
// Array Type
var ages = [20, 23];
ages.push(22);
// let people: Person[] = [person1, person2]
var people = [person1, person2];
console.log(people[0].name);
