import { getNotes, createNote, removeNote, updateNote } from './notes'
import { getFilters, setFilters } from './filters'

// console.log(getNotes())
// createNote()
// removeNote('9c970774-4ff9-4f03-8874-a32137c85f07')
// updateNote('86cad22f-519e-4916-a054-d05a15cd8104', {
//     title: 'my new title',
//     body: 'my new body'
// })
// console.log(getNotes())
console.log(getFilters())
setFilters({
    searchText: 'Office',
    sortBy: 'byCreated'
})
console.log(getFilters())