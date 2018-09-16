const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

const game1 = new Hangman('cat',2)
puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', function    (e) {
    game1.makeGuess(e.key)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

console.log(game1)