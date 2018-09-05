let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

let Person = {
    name: 'Gabriel Balog',
    age: 21,
    location: 'São Paulo'
}

console.log(`${Person.name} is ${Person.age} and lives in ${Person.location}`)
Person.age = Person.age + 1
console.log(`${Person.name} is ${Person.age} and lives in ${Person.location}`)