// // Build the BankAccount object with deposit, withdraw, and checkBalance methods
// let BankAccount = {
//   acoountHolder: "Praveen",

//   available_amount: 10000,

//   transactions: [],

//   checkbalance: function () {
//     console.log(
//       `Total amount available in your account is ${this.available_amount}`,
//     );
//   },

//   deposit: function (amountTodeposit) {
//     if (amountTodeposit <= 0) {
//       console.log("Enter a valid amount to deposit.");
//     } else {
//       this.available_amount += amountTodeposit;
//       console.log(`${amountTodeposit} has been deposited in your account.`);
//       console.log(`Total amount in your account is ${this.available_amount}.`);
//       this.transactions.push({
//         type: "Deposit",
//         amount: amountTodeposit,
//         balance: this.available_amount,
//       });
//     }
//   },

//   withdraw: function (amountToWithdraw) {
//     if (amountToWithdraw <= 0) {
//       console.log("Enter a valid amount to withdraw");
//     } else if (amountToWithdraw > this.available_amount) {
//       console.log("Insuficient Bank Balance");
//     } else {
//       this.available_amount -= amountToWithdraw;
//       console.log("Transaction Successfull");
//       console.log(`Total amount in your account is ${this.available_amount}`);
//       this.transactions.push({
//         type: "Withdraw",
//         amount: amountToWithdraw,
//         balance: this.available_amount,
//       });
//     }
//   },
//   showTransactions() {
//     console.log("Transaction History:");

//     for (let transaction of this.transactions) {
//       console.log(
//         `${transaction.type} | Amount: ₹${transaction.amount} | Balance: ₹${transaction.balance}`,
//       );
//     }
//   },
// };

function createBankAccount(){

  let accountHolder = "Praveen";
  let available_amount = 10000,
  transactions = []; // array of oject
    const addTransaction = (type,amount) => { 
       transactions.push({
          type :  type,
          amount :amount,
          balance : available_amount
        })
       
  }

   
  return {
  checkBalance : function () { return available_amount;
  } ,

  deposit : function (amountTodeposit) {
    if(typeof amountTodeposit !== "number" || amountTodeposit <= 0 ) return {
      success: false,
      message: "Invalid Amount"
    }
    
    available_amount += amountTodeposit;
    addTransaction("deposit",amountTodeposit);
    return {
      success: true,
      balance : available_amount
    }
    
  },

  withdraw : function (amountToWithdraw) {
    if ( typeof amountToWithdraw !== "number" || amountToWithdraw <= 0  )
    return {
    success: false,
    message: "Invalid Amount"
    };
    if(amountToWithdraw > available_amount)   return {
    success: false,
    message: "Insufficient Balance"
    };
    available_amount -= amountToWithdraw;
    addTransaction("withdraw",amountToWithdraw);
    return {
      success: true,
      balance : available_amount
    }
  },
    
  showTransactions() {
    return [...transactions]; // returns copy of transactions so that original tranaction remains intact
  }
  }
}
const customer1 = createBankAccount();
const customer2 = createBankAccount();

customer1.deposit(5000);

console.log(customer1.checkBalance());
console.log(customer2.checkBalance());
