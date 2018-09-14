const Hangman = function(word, numberOfGuesses) {
    this.word = word
    this.numberOfGuesses = numberOfGuesses
}

const game1 = new Hangman('cat',2)
console.log(game1)

const game2 = new Hangman('California', 10)
console.log(game2)