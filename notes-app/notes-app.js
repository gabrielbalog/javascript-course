const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

// const p = document.querySelector('p') // Match the first element
// p.remove()

const ps = document.querySelectorAll('p') // match list all the elements

ps.forEach(function(p) {
    p.textContent = '***************'
    // console.log(p.textContent)
    // p.remove()
})

// Add new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from Javascript'
document.querySelector('body').appendChild(newParagraph)