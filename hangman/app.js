const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

const game1 = new Hangman('cat',2)
puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    game1.makeGuess(e.key)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

getPuzzle("1").then((puzzle) => {
    console.log(puzzle)
}, (err) => {
    console.log(`Error: ${error}`)
})

getCountry("BR").then((country) => {
    console.log(country)
}, (error) => {
    console.log(`Error: ${error}`)
})