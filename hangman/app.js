// Primitive value: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
const myProduct = {
    name: 'Influence'
}

const otherProduct = new Object({
    name: '1984'
})

Object.prototype.someNewMethod = () => 'This is the new function'

// hasOwnProperty
console.log(product.someNewMethod())
console.log(product.hasOwnProperty('name'))
console.log(product)

// Array: myArray --> Array.prototype --> Object.prototype --> null
const team = new Array(['Luke', 'Maddison'])
console.log(team)

// Function: myFunc --> Function.prototype --> Object.prototype --> null
const getScore = () => 1
console.log(getScore)

// String: myString --> String.prototype --> Object.prototype --> null
const computer = 'Computer'
console.log(computer)

const otherProduct = new String('Phone')
console.log(otherProduct)

// Number: myNumber --> Number.prototype --> Object.prototype --> null
const myNumber = 10
console.log(computer)

const othernumber = new Number('Phone')
console.log(otherProduct)

// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null
const myBoolean = true
console.log(computer)

const otherBoolean = new Boolean(true)
console.log(otherProduct)

