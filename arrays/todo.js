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

const sortTodos = function(todos) {
    todos.sort(function(a,b) {
        if (!a.completed) {
            return -1
        } else if (a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

const deleteTodo = function(todos, todoText) {
    const index = todos.findIndex(function(todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function(todos) {
    return todos.filter(function(todo, index) {
        return !todo.completed
    })
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))

// deleteTodo(todos, 'passar pano')
// console.log(todos)