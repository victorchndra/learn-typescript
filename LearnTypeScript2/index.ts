// defining primitive data type
let myName: string = "Bob"
let numberOfWheels: number = 4
let isStudent: boolean = false

// defining custom data types
type Food = string
let favoriteFood: Food = "pizza"

// Object & Nested Object Types
type Address = {
  street: string,
  city: string,
  country: string
}

type Person = {
  name: string,
  age: number,
  isStudent: boolean,
  address?: Address
}

let person1: Person = {
  name: "Victor",
  age: 22,
  isStudent: false,
}

let person2: Person = {
  name: "Chandra",
  age: 18,
  isStudent: true,
  address: {
    street: 'Kulim',
    city: 'Pekanbaru',
    country: 'Riau'
  }
}

function displayInfo(person: Person) {
  // console.log(`${person.name} lives at ${person.address?.street}`);
}

displayInfo(person1)

// #Array Type
let ages: number[] = [20, 23]
ages.push(22)

// let people: Person[] = [person1, person2]
let people: Array<Person> = [person1, person2]
// console.log(people[0].name);

// #Literal Types
let myName2: "Bob" = "Bob"
const myName3: "Bob" = "Bob"