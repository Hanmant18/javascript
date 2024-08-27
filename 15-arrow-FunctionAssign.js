let arrowFun = ()=>{
    console.log('==============================Q.1=================================');
    console.log("Good Morning Today is Monday");   
}
arrowFun();


console.log('==============================Q.2====================================');

let arrowFun2 =(n1,n2,n3=1)=>{
    var result=n1*n2*n3;
    console.log(`the multiplication is:${result}`);   
}
arrowFun2(5,5,2);
arrowFun2(10,4);

console.log('==============================Q.3====================================');

let arrowFun3 =(n1,n2,n3,n4,n5)=>{
    var result = n1+n2+n3+n4+n5 ;
    return result;    
}
let addition = arrowFun3(100,100,200,349,756);
console.log(`the addition is :  ${addition}`);

let addition2 = arrowFun3("I am ","learning ","ES6 ","features ","in depth");
console.log(`the addition is :  ${addition2}`);

