const todos = [{
    text: 'Lavar louca',
    completed: false
},{
    text: 'Lavar roupa',
    completed: true
},{
    text: 'Dobrar a roupa',
    completed: true
},{
    text: 'Passar pano',
    completed: false
},{
    text: 'Molhar o cacto',
    completed: false
}]

// let todosLeft = 0
// todos.forEach(function(todo) {
//     if (!todo.completed) {
//         todosLeft++
//     }

// })

// const newParagraph = document.createElement('p')
// newParagraph.textContent = `You have ${todosLeft} todos left`
// document.querySelector('body').appendChild(newParagraph)

const incompleteTodos = todos.filter(function(todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function(todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})