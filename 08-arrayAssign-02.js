const array=[20,31,40,25,23,11,29,9,60,2,11];
console.log("============================1==========================");
let lengthArray=array.length;
console.log("the total element available in the array is:",lengthArray);

console.log("============================2==========================");
let firstElmt=array[0];
let lastElmt=array[array.length-1];
console.log(`the first element :${firstElmt} & the last element:${lastElmt}`);


console.log("============================3==========================");
let thirdLastElmt=array[array.length-3];
console.log("third last element :",thirdLastElmt);

console.log("============================4==========================");
for (let index = 0; index < array.length; index++) {
    if (array[index] % 2==0) {
        console.log("the even number in the array:",array[index]); 
    }
}

console.log("============================5==========================");
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 ==1) {
        console.log("odd number from the array:",array[i]);        
    }   
}

console.log("============================6,7,8=ignore=========================");
console.log("============================9================================");
for (let index = 0; index < array.length; index++) {
    if (array[index] % 5==0) {
        console.log("the number that is multiply by 5:",array[index]);
    }
}

console.log("============================10================================");
let check=array.includes(115);
console.log("the 115 is avialable in array:",check);

console.log("============================11================================");
let check2=array.includes(23);
console.log("the 23 is avialable in array:",check2);

console.log("============================12================================");
const array1=[20,31,40,25,23,11,29,9,60,2,11];
let insertArray=array1.splice(3,0,55,66);
console.log("insert the number at index 3:",insertArray);
console.log(array1);

console.log("============================13================================");
const array2=[20,31,40,25,23,11,29,9,60,2,11];
let replaceArray=array2.splice(4,3);
console.log("delete the number at index 3:",insertArray);
console.log(replaceArray);
console.log(array2);

