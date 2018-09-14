const Person = function(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person('Gabriel', 'Balog', 21)

console.log(me)

const person2 = new Person('Clancey','Truner', 28)

console.log(person2)