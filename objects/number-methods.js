let num = 103.941

console.log(num.toFixed(2)) // tamanha das casas decimais

console.log(Math.round(num)) // Arredondamento padrao pra cima
console.log(Math.floor(num)) // Arredondamento pra baixo
console.log(Math.ceil(num)) // Arredondamento pra cima

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min)) + min // 0 - .999999
console.log(randomNum)

let makeGuess = function(number) {
    let min = 1
    let max = 5
    randomNum = Math.floor(Math.random() * (max - min)) + min
    return number === randomNum
}

console.log(makeGuess(4))