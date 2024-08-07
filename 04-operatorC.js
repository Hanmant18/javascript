function interview( gradScore, hscScore,sscScore,candidateName){
        var result=gradScore >=70 || hscScore >=80 || sscScore >=90 
                   ? `Congrats ${candidateName} are ypu eliginle or TCS interview`
                   : `Unfortunately ${candidateName} you are not eligible for interview` ;
                   console.log(result);
                   
}   
interview(80,86,90,"Hanmant");
interview(70,65,55,"Apeksha");
interview(60,79,88,"Harsh");