const fruits=["Banana","Orange","Apple","Mango","Water Melon"];

    console.log("=====================1=========================");
    
    let fruit1=fruits[0];
    let fruit2=fruits[fruits.length-1];
    console.log(`the first element:${fruit1}, the last element:${fruit2}`);

    console.log("=====================2=========================");

    fruits.unshift("Papaya");
    console.log("the array after adding Papaya is:",fruits);

    console.log("=====================3=========================");

    let removeMango=fruits.splice(4,1);
    console.log(removeMango);

    console.log("remove Mango from the Array:",fruits);

    
    console.log("=====================4=========================");
    
    fruits.push("Pineapple");
    console.log("after insert the element Pineapple:",fruits); 

    console.log("=====================5=========================");
    fruits.splice(fruits.length-2,0,"Dragon Fruit");
    console.log("after insert the element Dragon Fruit:",fruits); 

    
    console.log("=====================6=========================");

    fruits.splice(2,1,"Kiwi");
    console.log("after replace orange with Kiwi:",fruits); 


    console.log("=====================7=========================");

    const result= fruits.slice(1,4);
    console.log("element of index 1 to 4:",result); 
    
    
    console.log("=====================8=========================");

    const result1= fruits.slice(fruits.length-3);
    console.log("last 3 element is:",result1); 
