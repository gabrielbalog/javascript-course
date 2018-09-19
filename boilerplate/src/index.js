const calculateAverage = (thing, numbers) => {
    let sum = 0
    numbers.forEach((num) => sum += num)
    const average = sum / numbers.length
    return `The average ${thing} is ${average}`
}

console.log(calculateAverage('age', 0, 100, 68, 14))

const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}

console.log(printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry'))