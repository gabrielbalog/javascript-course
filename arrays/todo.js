const todos = [{
    text: 'Lavar louca',
    completed: false
},{
    text: 'Lavar roupa',
    completed: false
},{
    text: 'Dobrar a roupa',
    completed: false
},{
    text: 'Passar pano',
    completed: false
},{
    text: 'Molhar o cacto',
    completed: false
}]

const deleteTodo = function(todos, todoText) {
    const index = todos.findIndex(function(todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

deleteTodo(todos, 'passar pano')
console.log(todos)