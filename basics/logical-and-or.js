let temp = 65

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice outside')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outise.')
} else {
    console.log('Eh. Do what you want')
}


let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer up vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer up some vegan options')
} else {
    console.log('Offer up anything on the menu')
}