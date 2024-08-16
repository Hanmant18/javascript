let professor = {
    firstName:"Rajat",
    lastName: "Patidar",
    age : 30,
    isMarried : true ,
    country : "India",
    degrees :{
        engineering : "cse",
        PHD : "Advance computing",
        college:"GDMS"
    },
        certificate : ["Hacker Rank Participation","certificate in IFE course","certificate in Adv programming"]
}
 console.log(professor);
 console.log("=================== add new property  ====================");
 professor.totalExperience = "14 years";
 console.log(`Total Experiences is : ${professor.totalExperience}`);
 console.log(professor);
 console.log("=================== modify the property  ====================");
 professor.age=60;
 console.log(` updated age is : ${professor.age}`);

 console.log("=================== oracle certificate add index of 2 ====================");
    let array4=professor.certificate.splice(2,0,"Oracle Certified");
 console.log(professor.certificate);

 console.log("=================== log last element in array  ====================");
     let array5=professor.certificate[professor.certificate.length-1];
     console.log(array5);
     
 console.log("=================== traverse the array using for of loop  ====================");
 for (const element of professor.certificate) {
    console.log(element); 
 }
 
console.log("===================log complete object using for in loop  ====================");
for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
         const element = professor[key];
        console.log(`${key}, ${element}`);
    }
}