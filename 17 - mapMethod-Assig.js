const arrayNumber=[20,11,40,25,23,11,9,31,60,2,19];
console.log(`the array is : ${arrayNumber}`);
console.log('================Q.1=====================');
const arraySum=arrayNumber.map((element) =>{
   return element + 10;
});     
 console.log(arraySum);

 console.log('================Q.2=====================');
 const arrayCube=arrayNumber.map((element) =>{
    return element * element * element;
 });     
  console.log(arrayCube);

  console.log('================Q.3=====================');
  const array=arrayNumber.map((index , element) =>{
    return element + index;
 });     
  console.log(array);
