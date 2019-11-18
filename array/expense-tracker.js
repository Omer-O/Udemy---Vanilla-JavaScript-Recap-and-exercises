const account = {
    name: 'Omer Ohana',
    expenses: []
}

//Expenses => description, amount
//addExpense => descrition, amount
//getAccountSummary => total up all expenses -> {account name} has {amount sum} in expenses.

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
console.log(account.getAccountSummary());