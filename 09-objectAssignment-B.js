sbiBank = {
    bankName :"SBI bank",
    location : "Pune",
    accountNo :888888888888,
    ifsc : "sbi888888",
    interestRate : " 5% ",
    showDetails : function(){
        console.log(`BankName :${this.bankName}||Location:${this.location}||AccountNo:${this.accountNo}||IFSC code:${this.ifsc}||interestRate:${this.interestRate} `);
    }
    }
sbiBank.showDetails()
    
console.log("===============================================================================================");

axisBank = {
    bankName :"Axis bank",
    location : "Mumbai",
    accountNo : 888888888888,
    ifsc : "axis8888888",
    interestRate : " 6% ",
    showDetails : function(){
         console.log(`BankName :${this.bankName}||Location:${this.location}||AccountNo:${this.accountNo}||IFSC code:${this.ifsc}||interestRate:${this.interestRate} `);
    }
    }
axisBank.showDetails()

console.log("===============================================================================================");

hdfcBank = {
    bankName :" HDFC bank",
    location : "Bangalore",
    accountNo : 888888888888,
    ifsc : "hdfc888888888",
    interestRate : "5% ",
    showDetails : function(){
        console.log(`BankName :${this.bankName}||Location:${this.location}||AccountNo:${this.accountNo}||IFSC code:${this.ifsc}||interestRate:${this.interestRate} `);
    }
    }
hdfcBank.showDetails()

console.log("===============================================================================================");

yesBank = {
    bankName :"Yes bank",
    location : "Delhi",
    accountNo : 888888888888,
    ifsc : "axis888888888",
    interestRate : " 7% ",
    showDetails : function(){
        console.log(`BankName :${this.bankName}||Location:${this.location}||AccountNo:${this.accountNo}||IFSC code:${this.ifsc}||interestRate:${this.interestRate} `);
    }
}
yesBank.showDetails()