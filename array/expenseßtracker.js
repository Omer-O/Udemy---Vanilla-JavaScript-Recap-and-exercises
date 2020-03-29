
const account = {
    name: 'Omer Ohana',
    expenses: [],
    income: [],
    addExpenses: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        });
    }, addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        });
    }, getAccountSummary: function () {
        let totalExpenses = 0;
        let totalIncome = 0;
        let totalBalance = 0;

        this.expenses.forEach(expens => {
            totalExpenses = totalExpenses + expens.amount;
        });

        this.income.forEach(incm => {
            totalIncome = totalIncome + incm.amount;
        });
        
        totalBalance = totalIncome - totalExpenses;
            return `${this.name} has a balance of ${totalBalance}. ${totalIncome}. ${totalExpenses} in expense.`
    }
}

account.addExpenses('Rent', 950);
account.addExpenses('coffee', 2);
account.addIncome('job', 1000);
console.log(account.getAccountSummary());
