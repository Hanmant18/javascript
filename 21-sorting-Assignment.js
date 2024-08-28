const arrayRollNumber = [113,45,56,11,32,45,109,799,56,45];
console.log('================Q.1 Reverse The Array================');
const reverseArray=arrayRollNumber.reverse();
console.log(reverseArray);

console.log('================Q.2 Sort The Array Without any Logic================');
const sorting = arrayRollNumber.sort();
console.log(sorting);

console.log('================Q.3 Sort The Array With custom Logic================');
const orederAssec = arrayRollNumber.sort((n1,n2)=>{
    return n1 > n2 ? 1 : -1 ;
});
console.log(orederAssec);

console.log('================Q.4 Find The Greatest Number From The Array================');
const GreatNum = orederAssec[orederAssec.length-1];
console.log(`The Greatest Number Of The Array is: ${GreatNum}`);

console.log('================Q.5 Find The Smallest Number From The Array================');
const SmallNum = orederAssec[0];
console.log(`The Smallest Number Of The Array is: ${SmallNum}`);

console.log('================Q.6 Removw Duplicates Number From The Array================');
