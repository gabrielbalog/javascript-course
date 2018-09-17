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

getPuzzle("2").then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(`Error: ${error}`)
})

getCountry("BR").then((country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(`Error: ${error}`)
})

// fetch('http://puzzle.mead.io/puzzle', {}).then((res) => {
//     if (res.status === 200) {
//         return res.json()
//     } else {
//         throw new Error('Unable to fetch a new puzzle')
//     }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((err) => console.log(err))