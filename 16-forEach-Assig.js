const arrayNumber = [1,-7,40,502,-77,91,0,108,89,-602];
console.log('==========1.log the element with its index============');
arrayNumber.forEach((element,index) => {
    console.log(`element is:${element}   index is:${index} `);   
});

console.log('==========2.log the positive number using forEach============');
arrayNumber.forEach(element => {
    if (element >= 0) {
       console.log(element);   
    }
});

console.log('==========3.log the negative number and add into the new array=====');
let negativeNum = [];
arrayNumber.forEach(element => {
    if (element <=0) {
       negativeNum.push(element);
    }
});
console.log(negativeNum);

console.log('==========4.log the even number in  the array=====');
arrayNumber.forEach(element => {
    if (element % 2==0 , element >= 0) {
        console.log(`the even nimbers is:${element}`); 
    }
});

console.log('==========5.log the sum of all the elements in the array=====');
let sum = 0;
arrayNumber.forEach(element => {
        sum = sum + element;
});
console.log('the sum of element in the array is :',sum);

console.log('==========6.log the even indexed array elements in the array=====');
arrayNumber.forEach((element, index) => {
    if (index % 2 ==0) {
        console.log(`the even indexed array elements is: ${element}`);
        
    }
});