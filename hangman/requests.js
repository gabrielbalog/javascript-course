const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch puzzle')
    }
}

const getCountry = (countryCode) => {
    return fetch('https://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data')
        }
    }).then((data) => data.find((country) => {
            return country.alpha2Code === countryCode
        }))
}

const getLocation = () => {
    return fetch('https://ipinfo.io/json?token=94734b55fc81ea').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data')
        }
    })
}