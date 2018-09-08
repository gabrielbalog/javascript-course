// DOM

// const p = document.querySelector('p') // Match the first element
// p.remove()

const ps = document.querySelectorAll('p') // match list all the elements

ps.forEach(function(p) {
    p.textContent = '***************'
    // console.log(p.textContent)
    // p.remove()
})