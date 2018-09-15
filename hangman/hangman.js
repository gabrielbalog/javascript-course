const Hangman = function(word, numberOfGuesses) {
    this.word = word.toLowerCase().split('')
    this.numberOfGuesses = numberOfGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function() {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

Hangman.prototype.makeGuess = function(guess) {
    // const guessedLetter = letter.toLowerCase()
    // if (typeof guessedLetter === 'string' && guessedLetter.length === 1) {
    //     if (!this.guessedLetters.includes(guessedLetter)) {
    //         if (!this.word.includes(guessedLetter)) {
    //             this.numberOfGuesses -= 1
    //         }
    //         this.guessedLetters.push(guessedLetter)
    //     }
    // } else {
    //     throw Error('Value must be caracter and have length of 1')
    // }
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (isUnique) {
        this.guessedLetters.push(guess)
    }

    if (isUnique && isBadGuess) {
        this.numberOfGuesses--
    }
}

const game1 = new Hangman('cat',2)
console.log(game1.getPuzzle())
console.log(`Remaining guesses: ${game1.numberOfGuesses}`)

window.addEventListener('keypress', function    (e) {
    game1.makeGuess(e.key)
    console.log(game1.getPuzzle())
    console.log(`Remaining guesses: ${game1.numberOfGuesses}`)
})