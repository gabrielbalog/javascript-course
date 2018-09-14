const Hangman = function(word, numberOfGuesses) {
    this.word = word.toLowerCase().split('')
    this.numberOfGuesses = numberOfGuesses
    this.guessedLetters = ['c','a']
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


const game1 = new Hangman('cat',2)
console.log(game1.getPuzzle())

const game2 = new Hangman('California', 10)
console.log(game2.getPuzzle())