console.log("=====================1========================");
function greaterNumber(n1,n2){
  var result=n1>=n2 ? n1:n2;
  console.log(`The given number is ${n1} and ${n2} the greater number is= ${result}`);
  
}
greaterNumber(10,-10);
greaterNumber(800,899);


console.log("=====================2========================");
function isEvenOrOddNum(num){
 var result=num%2==0 ? true : false;
 return result;
}
var result=isEvenOrOddNum(29);
console.log(`the number "29"is odd=${result}`);
var result=isEvenOrOddNum(44);
console.log(`the number "44"is even=${result}`);
var result=isEvenOrOddNum(0);
console.log(`the number "0"is even=${result}`);
var result=isEvenOrOddNum(101);
console.log(`the number "101"is even=${result}`);

console.log("=====================3========================");

function wordLength(word){
   var word1="JavaScript";
//    console.log(`the length of javascript is=${word1.length}`);
   var result=word1.length%2==0 ?  console.log("the word JavaScript is EVEN length") : console.log("the word JavaScript is ODD length");
  
   var word1="developer";
//    console.log(`the length of javascript is=${word1.length}`);
   var result=word1.length%2==0 ?  console.log("the word Developer is EVEN length") : console.log("the word Developer is ODD length");

   var word1="google";
//    console.log(`the length of google is=${word1.length}`);
   var result=word1.length%2==0 ?  console.log("the word Google is EVEN length") : console.log("the word Google is ODD length");


}
wordLength();



