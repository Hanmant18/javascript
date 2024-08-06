console.log("=================1================");
function squareOfWordLength(word){
    console.log(`the sentence is:${word}`);
    var result=word.split(" ");
    var squqreLength= result.length*result.length;
    console.log(`the Squqre of words length: ${squqreLength}`);
}
squareOfWordLength("JavsScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Web Developer Smart");


console.log("=================2================");

console.log("=================2.1================");
function lengthOperator(){
    var String="I am Angular Developer";
    console.log(`the length of string "I am Angular Developer" is: ${String.length}`);
    var totalno=String.split(" ");
    var result=String.length/totalno.length;
    console.log(`the result after divide:${result}`);

    console.log("=================2.2================");
    var result=String.length*totalno.length;
    console.log(`the result after Multiplication: ${result}`);

    
}
lengthOperator();