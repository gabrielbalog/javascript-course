// Multiple arguments
let add = function(a, b, c) {
    return a + b + c
}

result = add(10, 1, 5)
console.log(result) // 16 

// Default arguments
let getScoreText = function(name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}` // Name: Anonymous - Score: 0
}

getScoreText() //  Anonymous 0
let scoreText = getScoreText()
console.log(scoreText) // Name: Anonymous - Score: 0


let getTip = function(total, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}.` // A 20% tip on $100 would be $20.
}

let tip = getTip(100)
console.log(tip) // 20

let name = 'Jen'
let age = 12
console.log(`Hey, my name is ${name}! I am ${age} years old.`) // Hey, my name is Jen! I am 12 years old