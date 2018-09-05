let name = '  Gabriel Balog '

// Length
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method - in python method
let password = 'abc123password098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

let isValidPassword = function(password) {
    // if (password.length > 8 && !password.includes('password')) {
    //     return true
    // } else {
    //     return false
    // }
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asad'))
console.log(isValidPassword('abc123password098'))
console.log(isValidPassword('fakçfajkjnasçkagsjak'))