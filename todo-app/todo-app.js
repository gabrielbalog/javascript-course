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

const filters = {
    searchText: '',
}

renderTodos = function(todos, filters) {
    const todosFiltered = todos.filter(function(todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#todos').innerHTML = ''

    const incompleteTodos = todosFiltered.filter(function(todo) {
        return !todo.completed
    })

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)
    
    todosFiltered.forEach(function(todo) {
        const todoEl = document.createElement('p')
        todoEl.textContent = todo.text
        document.querySelector('#todos').appendChild(todoEl)
    })
}

renderTodos(todos, filters)

document.querySelector('#search-todo-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit', function(e) {
    e.preventDefault()

    todos.push({
        text: e.target.elements.todoText.value,
        completed: false
    })

    e.target.elements.todoText.value = ''
    renderTodos(todos, filters)
})