// Build the BankAccount object with deposit, withdraw, and checkBalance methods
let BankAccount = {
  acoountHolder: "Praveen",

  available_amount: 10000,

  transactions: [],

  checkbalance: function () {
    console.log(
      `Total amount available in your account is ${this.available_amount}`,
    );
  },

  deposit: function (amountTodeposit) {
    if (amountTodeposit <= 0) {
      console.log("Enter a valid amount to deposit.");
    } else {
      this.available_amount += amountTodeposit;
      console.log(`${amountTodeposit} has been deposited in your account.`);
      console.log(`Total amount in your account is ${this.available_amount}.`);
      this.transactions.push({
        type: "Deposit",
        amount: amountTodeposit,
        balance: this.available_amount,
      });
    }
  },

  withdraw: function (amountToWithdraw) {
    if (amountToWithdraw <= 0) {
      console.log("Enter a valid amount to withdraw");
    } else if (amountToWithdraw > this.available_amount) {
      console.log("Insuficient Bank Balance");
    } else {
      this.available_amount -= amountToWithdraw;
      console.log("Transaction Successfull");
      console.log(`Total amount in your account is ${this.available_amount}`);
      this.transactions.push({
        type: "Withdraw",
        amount: amountToWithdraw,
        balance: this.available_amount,
      });
    }
  },
  showTransactions() {
    console.log("Transaction History:");

    for (let transaction of this.transactions) {
      console.log(
        `${transaction.type} | Amount: ₹${transaction.amount} | Balance: ₹${transaction.balance}`,
      );
    }
  },
};

BankAccount.deposit(5000);
BankAccount.deposit(500);
BankAccount.deposit(1500);
BankAccount.deposit(100);
BankAccount.deposit(400);

console.log(BankAccount.showTransactions());
