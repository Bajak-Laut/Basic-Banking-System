class BankAccount {
    constructor(balance = 1000) {
        this.balance = balance;
    }

    deposit(amount) {
        return new Promise((resolve, reject) => {
            if (amount <= 0) {
                reject(new Error('Invalid deposit amount. Amount must be greater than 0.'));
            } else {
                setTimeout(() => {
                    this.balance += amount;
                    resolve(`Deposited $${amount}. New balance: $${this.balance}`);
                }, 1000); // Simulate asynchronous transaction after 1 second
            }
        });
    }

    withdraw(amount) {
        return new Promise((resolve, reject) => {
            if (amount <= 0) {
                reject(new Error('Invalid withdrawal amount. Amount must be greater than 0.'));
            } else if (amount > this.balance) {
                reject(new Error('Insufficient funds. Cannot withdraw.'));
            } else {
                setTimeout(() => {
                    this.balance -= amount;
                    resolve(`Withdrawn $${amount}. New balance: $${this.balance}`);
                }, 1000); // Simulate asynchronous transaction after 1 second
            }
        });
    }
}

function setBalance() {
    const balanceInput = document.getElementById('balanceInput');
    const balance = parseFloat(balanceInput.value);
    if (!isNaN(balance)) {
        const balanceElement = document.getElementById('balance');
        balanceElement.textContent = balance;
    } else {
        alert('Invalid balance input. Please enter a valid number.');
    }
}

function testDeposit() {
    const account = new BankAccount();
    const amount = parseFloat(prompt('Enter deposit amount:'));
    if (!isNaN(amount)) {
        account.deposit(amount)
            .then(result => {
                const balanceElement = document.getElementById('balance');
                balanceElement.textContent = account.balance;
                alert(result);
            })
            .catch(error => {
                alert(error.message);
            });
    } else {
        alert('Invalid deposit amount. Please enter a valid number.');
    }
}

function testWithdraw() {
    const account = new BankAccount();
    const amount = parseFloat(prompt('Enter withdrawal amount:'));
    if (!isNaN(amount)) {
        account.withdraw(amount)
            .then(result => {
                const balanceElement = document.getElementById('balance');
                balanceElement.textContent = account.balance;
                alert(result);
            })
            .catch(error => {
                alert(error.message);
            });
    } else {
        alert('Invalid withdrawal amount. Please enter a valid number.');
    }
}
