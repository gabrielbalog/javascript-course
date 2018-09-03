// Multiple arguments
let add = function(a, b, c) {
    return a + b + c
}

result = add(10, 1, 5)
console.log(result) // 16 

// Default arguments
let getScoreText = function(name = 'Anonymous', score = 0) {
    // console.log(name)
    // console.log(score)
    return 'Name: ' + name + ' - Score: ' + score
}

getScoreText() //  Anonymous 0
let scoreText = getScoreText()
console.log(scoreText) // Name: Anonymous - Score: 0


let getTip = function(total, tipPercent = .2) {
    return total * tipPercent
}

let tip = getTip(100)
console.log(tip) // 20