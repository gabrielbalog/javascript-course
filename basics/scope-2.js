// Global (name)
    // Local (name)
        // Local
    // Local

// let name = 'Gabriel'

if (true) {
    // let name = 'Mike'

    if (true) {
        // let name = 'Jen' // Define como local variable
        name = 'Jen' // Define como global variable
        console.log(name) // Gabriel -> Mike -> Jen
    }
}

if (true) {
    console.log(name) // Gabriel -> Jen
}