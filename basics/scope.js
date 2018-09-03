// Lexical Scope (Static Scope)
// Global Scope - Definide outised of all code blocks
// Local Scope - Definide inside a code block

// In a scope you can access variables defined in that scope, or in any parent 

// Global Scope (varOne)
    // Local Scope (varTwo)
        // Local Scope (varFour)
    // Local Scope (varThree)

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'

    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree' 
}

console.log(varTwo) // ReferenceError: varTwo is not defined