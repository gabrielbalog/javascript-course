const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

// console.log(notes.pop()) // Note 3 -> Remove o ultimo item
// notes.push('My new note') // append

// console.log(notes.shift()) // Remove o primeiro item
// console.log(notes.unshift('My first note')) // Adiciona no comeco

// notes.splice(1, 2) // Remove 2 itens a partir da posicao 1
// notes.splice(1, 0, 'This is the new second item') // Adiciona a string na segunda posicao 
// notes.splice(1, 1, 'This is the new second item') // Atualiza o valor da segunda posicao com a string

// notes[1] = 'This is the new second item' // Atualiza o segundo item com a string

// notes.forEach(function(item, index) {
//     console.log(index)
//     console.log(item)
// })

console.log(notes)
console.log(notes.length)

console.log(notes.indexOf('Note 3'))

// let someObject = {}
// let otherObject = someObject

// console.log(someObject === otherObject) // true -> comparacao de objetos na memoria
// console.log({} === {}) // false -> comparacao de objetos

// Nao podemos comparar a estrutura de objetos para verificar se sao iguais
// Um objeto so vai ser igual a outro se for a mesma referencia na memoria

const index = notes.findIndex(function(note, index) {
    return note.title === 'Habbits to work on'
})

console.log(index)