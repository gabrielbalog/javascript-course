let myAccount = {
    name: 'Gabriel Balog',
    expenses: 0,
    income: 0
}

let otherAccount = myAccount
otherAccount.income = 1000 // Atualizando o valor de myAccount
otherAccount = {} // Nao fara nada

let addExpense = function(account, amount) {
    // account = {} // nao funciona pois so e possivel modificar uma property
    account.expenses = account.expenses + amount
    console.log(account)
}

addExpense(myAccount, 2.50)

console.log(myAccount)