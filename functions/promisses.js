// Callback
const getDataCallback = (callback) => {
    setTimeout(() => {
        // callback(undefined, 'This is the data')
        callback('This is my error',undefined)
        callback('This is my error',undefined)
    }, 2000)

}

getDataCallback((error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})

// Promisse
const getDataPromise = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`This is the promise data ${data}`)
        // reject('This is the promise error')
        // reject('This is the promise error')
    }, 2000)
})

const myPromise = getDataPromise(123)

myPromise.then((data) => {
    console.log(data)
}, (error) => {
    console.log(error)
})

myPromise.then((data) => {
    console.log(data)
}, (error) => {
    console.log(error)
})