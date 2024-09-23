let readlineSync = require('readline-sync');
let userName = readlineSync.question("May I have your name ?");
let score= 0;

console.log("Hi " + userName + " how are You");

//  create a mcq question and  increse score 
let age = readlineSync.question("you are older than 25?");
if(age === "yes"){
console.log("you are right");
score = score + 1;
}
else if(age=== "no"){
    let age2 = readlineSync.question("how old you are");
    console.log(age2);
}
else{
    console.log("your are wrong");
}
console.log("score " + score)

let yoursmart = readlineSync.question("Your are smart ?");

if(yoursmart === "yes"){
    console.log("yes i am smart");
    score = score +1;
}
else if(yoursmart === "not really"){
    console.log("not sure")
    score = score + 1;
}
else{
    console.log("no i am not a smart person");
    score  = score -1;
}
console.log("score"+score);


// fuctions in js 
    function add(one,two){
        let sum = one + two;
        console.log(" one is " + one +"and "+" two is "+ two+ " so result is "+ sum);

        return sum;
    }
    add(5,6);
    function mul(one,two){
        let sum = one *  two;
        console.log(" one is " + one +"and "+" two is "+ two + " so result is "+ sum);

        return sum;
    }
    mul(5,6);