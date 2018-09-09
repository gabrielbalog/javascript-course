const getSavedTodos = function() {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const renderTodos = function(todos, filters) {
    const todosFiltered = todos.filter(function(todo) {
        if (!filters.hideCompleted) {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        } else {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !todo.completed
        }
    })

    
    const incompleteTodos = todosFiltered.filter(function(todo) {
        return !todo.completed
    })
    
    
    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))
    
    todosFiltered.forEach(function(todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

const generateTodoDOM = function(todo) {
    const todoEl = document.createElement('p')
    todoEl.textContent = todo.text
    return todoEl
}

const generateSummaryDOM = function(incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}