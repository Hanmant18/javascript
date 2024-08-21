    function bank(bankName,location,IfscCode,branchCode){
    this.bankName=bankName;
    this.location=location;
    this.IfscCode=IfscCode;
    this.branchCode=branchCode;

}
    
const bank1=new bank("yesBank","sangola","10101010","0123456789");
const bank2=new bank("sbiBank","pune","11111111","0123488889");
const bank3=new bank("mahBank","mumbai","12121212","0123999999");
const bank4=new bank("axisBank","sangola","13131313","01000000000");

console.log("=================Bank Details============================");

console.log(bank1);
console.log(bank2);
console.log(bank3);
console.log(bank4);

bank.prototype.openTime="09:00 Am IST";
bank.prototype.closeTime="06:00 Pm IST";

console.log("=================open and close time of SBI bank================");
console.log(`SBI bank open at: ${bank2.openTime} and Close at: ${bank2.closeTime}`);

console.log("=================name of bank and close time================");
console.log(`Bank Name: ${bank4.bankName} and Close at: ${bank4.closeTime}`);

console.log("=================bank details and open time================");
console.log(`Bank Name: ${bank1.bankName} Branch Code: ${bank1.branchCode} and Close at: ${bank1.openTime}`);

