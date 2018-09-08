const todos = ['Lavar louca', 'Lavar roupa', 'Dobrar a roupa', 'Passar pano', 'Molhar o cacto']

todos.splice(2,1) // remove 3 item
todos.push('Guardar a louca') // adiciona ao final do array
todos.shift() // remove primeiro item

console.log(`You have ${todos.length} todos!`)

todos.forEach(function(todo, index) {
    console.log(`${index + 1}. ${todo}`)
})

for (let count = 0; count <= todos.length -1; count++) {
    console.log(`${count + 1}. ${todos[count]}`)
}