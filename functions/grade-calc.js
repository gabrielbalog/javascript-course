const gradeCalc = function(studentScore, possibleScore) {

    if (typeof studentScore !== 'number' || typeof possibleScore !== 'number') {
        throw Error('Please provide number as argument!')
    }
    score = (studentScore / possibleScore) * 100
    let letterGrade = ''

    if (score >= 90) {
        letterGrade = 'A'
    } else if (score >= 80) {
        letterGrade = 'B'
    } else if (score >= 70) {
        letterGrade = 'C'
    } else if (score >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    
    return `You gote a ${letterGrade} (${score}%)!`
}

try {
    const gradeOne = gradeCalc('a', 20)
    const gradeTwo = gradeCalc(5, 20)
    
    console.log(gradeOne)
    console.log(gradeTwo)
} catch (e) {
    console.log(e.message)
}