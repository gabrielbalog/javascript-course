'use strict'

const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const toogleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
    }
}

const renderTodos = (todos, filters) => {
    const todosFiltered = todos.filter((todo) => {
        if (!filters.hideCompleted) {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        } else {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !todo.completed
        }
    })

    
    const incompleteTodos = todosFiltered.filter((todo) => !todo.completed)
    
    
    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))
    
    todosFiltered.forEach((todo) => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div')
    const todoText = document.createElement('span')
    const checkbox = document.createElement('input')
    const button = document.createElement('button')

    checkbox.setAttribute('type','checkbox')
    checkbox.checked = todo.completed
    checkbox.addEventListener('change', () => {
        toogleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    todoEl.appendChild(checkbox)
    
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)
    
    button.textContent = 'x'
    todoEl.appendChild(button)
    button.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}