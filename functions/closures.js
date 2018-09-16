const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(70))

const add100 = createAdder(100)
console.log(add100(-10))

const createTipper = (percentage) => {
    return (amount) => {
        return (amount / 100) * percentage
    }
}

const tip15 = createTipper(15)
const tip30 = createTipper(30)
const tip45 = createTipper(45)
console.log(tip15(50))
console.log(tip30(50))
console.log(tip45(50))