console.log("========================================1=length of the character==========================================");
const str="Hello,World";
console.log("the length of str:",str.length);

const str1="JavaScript is a language of internal"
const length=str1.length;
console.log(`the length of${str1}is:${length}`);

console.log("========================================2=print the last character======================================");

function getLastchar(str) {
    let last=str.charAt(str.length-1);
    console.log("the last character of the String is:",last);
    
}
getLastchar("Hey,my freind,Programming language");
getLastchar("I am learning logical programming");
getLastchar("React");

console.log("========================================3=print the first character====================================");

function getFirstchar(str) {
    return str.charAt(0);
}
const str2="React";
const str3="Virat Kohli";
const str4="World founder is God";

console.log(`the first character of string ${str2} is: ${getFirstchar(str2)}`);
console.log(`the first character of string ${str3} is: ${getFirstchar(str3)}`);
console.log(`the first character of string ${str4} is: ${getFirstchar(str4)}`);

console.log("=================================4=Check the specific string in main string============================");

function checkString(str) {
    return str.includes("UI");
}
const str5="React-UI Developer";
const str6="UI Developer";
const str7="Front and Bakend technologies";

console.log(`does the string ${str5}contains "UI"? : ${checkString(str5)}`);
console.log(`does the string ${str6}contains "UI"? : ${checkString(str6)}`);
console.log(`does the string ${str7}contains "UI"? : ${checkString(str7)}`);

console.log("=================================5=Check the specific string in main string============================");
function splitString(strr,delimeter){
    return strr.split(delimeter);
}
const str8="apple,orange,banana";
const str9="stew,bill,jenny,elon";

const result1=splitString(str8,",");
console.log(`the array of substrin from "${str8}"is`,result1);


const result2=splitString(str9,",");
console.log(`the array of substrin from "${str9}"is`,result2);

console.log("=================================6=Reverse String using predefined method================================================");

function reversStrin(reversStr){
    return reversStr.split('').reverse().join('');
}

const reversstring="Software";
const reversstring2="UI Developer";

console.log(`the reverse string of the string "${reversstring}"is:${reversStrin(reversstring)}`);

console.log(`the reverse string of the string "${reversstring2}"is:${reversStrin(reversstring2)}`);

console.log("=================================6=Reverse String Without using predefined method================================================");

function reversStrinWtht(word){
    let reverseString=' ';
    for (let index =word.length-1; index >=0; index--) {
        reverseString +=word[index];
    }
    return reverseString;
}

const reversstring3="Web developer";
const reversstring4="Jay Shree Ram";
const reversstring5="Java";

console.log(`the reverse string "${reversstring3}" is :${reversStrinWtht(reversstring3)}`);
console.log(`the reverse string "${reversstring4}" is :${reversStrinWtht(reversstring4)}`);
console.log(`the reverse string "${reversstring5}" is :${reversStrinWtht(reversstring5)}`);

