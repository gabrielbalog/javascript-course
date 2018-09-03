// Function - input (argument), code, output (return value)

let greetUser = function() {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function(num) {
    // console.log(num)
    let result = num * num
    return result
}

let num = 3
let value = square(num)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

let convertFahrenheitToCelsius = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9
    return celsius
}

console.log(convertFahrenheitToCelsius(32))
console.log(convertFahrenheitToCelsius(68))