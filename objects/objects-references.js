let myAccount = {
    name: 'Omer',
    expenses: 0,
    income: 0
}

let otherAccount = myAccount;//create binding - if we will modify otherAccount myAccount will
//be affected as well.
otherAccount.income = 1000;//will modify the property income of myAccount.
let addExpense = function(account, amount) {//we eant to manipulate the expense property in the account obj.
    account.expenses = account.expenses + amount;//this will change the number in the account's expenses property
   // console.log(account);
    
}
addExpense(myAccount, 2.50);
//first argument - an account (myAccount in this case)
//second argument - the amount. 
console.log(myAccount);


//Challenge - account manager: 

let challengeAccount = {
    name: 'Omer',
    expenses: 0,
    income: 0
}

let addExpenses = function(account, amount) {
    account.expenses = account.expenses + amount;
}
//addIncome to the account - account, amount
let addIncome = function(account, income) {
    account.income = account.income + income;
}
//resetAccount - reset the expenses and the income to 0 - account
let resetAccount = function(account) {
    account.expenses = 0;
    account.income = 0;
}
//getAccountSummmary - will present the current situation of the account.
let getAccountSummmary = function(account) {
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has $${balance}. $${account.income} in income $${account.expenses} in expenses`
}
//Account for Omer has $1000. $900 in income $100 in expenses.

addIncome(challengeAccount, 2000);
addExpenses(challengeAccount, 500);
addExpenses(challengeAccount, 200);
console.log(getAccountSummmary(challengeAccount));
resetAccount(challengeAccount);
console.log(challengeAccount);
