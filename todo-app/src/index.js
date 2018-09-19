// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports

// Render initial todos

// Set up search text handler

// Set up checkbox handler

// Set up form submission handler

// Bonus: Add a watcher for local storage

import { getFilters, setFilters } from './filters'

console.log(getFilters())
setFilters({
    searchText: 'São Paulo',
    hideCompleted: true
})
console.log(getFilters())

import { getTodos, createTodo, removeTodo, toogleTodo } from './todos'
console.log(getTodos())
createTodo('Finish this course')
console.log(getTodos())
toogleTodo('id')
removeTodo('id')
console.log(getTodos())