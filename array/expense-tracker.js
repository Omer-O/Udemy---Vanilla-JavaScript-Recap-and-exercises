const account = {
    name: 'Omer Ohana',
    expenses: [],
    //addExpense => descrition, amount
    addExpense: function (descrip, amount) {
        //this will accsses the obj
        //push() pass property to the array
        //expenses = the array
        this.expenses.push({
            //new properties will take the arguments. 
            description: descrip,
            amount: amount
        });
    },
    //claculate the amount: 
    getAccountSummary: function () {
        let totalAmount = 0;
        //pass a callback function and allow to accsses indevidual item
        this.expenses.forEach(function (expens) {
            totalAmount = totalAmount + expens.amount
        });
        return `${this.name} has ${totalAmount} in expenses.`;
    }
}

//Expenses => description, amount
//addExpense => descrition, amount

//getAccountSummary => total up all expenses -> {account name} has {amount sum} in expenses.

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
console.log(account.getAccountSummary());