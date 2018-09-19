const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}

const team = {
    name: 'Liberty',
    coach: 'Casey Penn',
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}

printTeam(team.name, team.coach, ...team.players)

let cities = ['Barcelona', 'Cape Town', 'Bordeaux']
cities = [...cities, 'Santiago']
console.log(cities)

let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 2015
}

let newHouse = {
    basement: true,
    ...house,
    bedrooms: 3
}

newHouse.yearBuilt = 2018

console.log(house)
console.log(newHouse)

let person = {
    name: 'Gabriel Balog',
    age: 21
}

let location = {
    city: 'São Paulo',
    country: 'Brazil'
}

let info = {
    ...person,
    ...location
}

console.log(info)