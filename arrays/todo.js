const todos = ['Lavar louca', 'Lavar roupa', 'Dobrar a roupa', 'Passar pano', 'Molhar o cacto']

todos.splice(2,1) // remove 3 item
todos.push('Guardar a louca') // adiciona ao final do array
todos.shift() // remove primeiro item

console.log(`You have ${todos.length} todos!`)
console.log(todos)