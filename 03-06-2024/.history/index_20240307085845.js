class BankAccount {
    constructor(accountNo, accountHolder, balance) {
        this._accountNo = accountNo;
        this._accountHolder = accountHolder;
        this._balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log(`Deposited ${amount}. New balance is ${this._balance}.`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            console.log(`Withdrawn ${amount}. New balance is ${this._balance}.`);
        } else {
            console.log("Invalid withdrawal amount or insufficient balance.");
        }
    }

    displayBalance() {
        console.log(`Account No.: ${this._accountNo}, Account Holder: ${this._accountHolder}, Balance: ${this._balance}`);
    }
}

class SavingAccount extends BankAccount {
    constructor(accountNo, accountHolder, balance) {
        super(accountNo, accountHolder, balance);
        this._interestRate = 0.05;
        this._withdrawalLimit = 3;
        this._withdrawalCount = 0;
    }

    addInterest() {
        const interest = this._balance * this._interestRate;
        this.deposit(interest);
        console.log(`Added interest of ${interest}. New balance is ${this._balance}.`);
    }

    withdraw(amount) {
        if (this._withdrawalCount < this._withdrawalLimit) {
            super.withdraw(amount);
            this._withdrawalCount++;
        } else {
            console.log("Withdrawal limit exceeded. Penalty fee applied.");
            super.withdraw(amount + 10);
        }
    }
}

const account1 = new BankAccount(1, "Alice", 1000);
account1.deposit(500);
account1.withdraw(200);
account1.displayBalance();

const savingAccount1 = new SavingAccount(2, "Bob", 2000);
savingAccount1.addInterest();
savingAccount1.withdraw(300);
savingAccount1.withdraw(300);
savingAccount1.withdraw(300);
savingAccount1.withdraw(300);
savingAccount1.displayBalance();
