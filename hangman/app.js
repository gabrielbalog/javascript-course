// const product = {
//     name: 'Influence'
// }

const product = new Object({
    name: '1984'
})

Object.prototype.someNewMethod = () => 'This is the new function'

// hasOwnProperty
console.log(product.someNewMethod())
console.log(product.hasOwnProperty('name'))
console.log(product)