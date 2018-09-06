const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.pop()) // Note 3 -> Remove o ultimo item
// notes.push('My new note') // append

// console.log(notes.shift()) // Remove o primeiro item
// console.log(notes.unshift('My first note')) // Adiciona no comeco

// notes.splice(1, 2) // Remove 2 itens a partir da posicao 1
// notes.splice(1, 0, 'This is the new second item') // Adiciona a string na segunda posicao 
// notes.splice(1, 1, 'This is the new second item') // Atualiza o valor da segunda posicao com a string

notes[1] = 'This is the new second item' // Atualiza o segundo item com a string

console.log(notes)
console.log(notes.length)
console.log(notes[0])
