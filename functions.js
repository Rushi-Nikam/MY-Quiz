let readlineSync = require("readline-sync");
let score = 0;

function  myInfo(question , answer){
    let user = readlineSync.question(question);
    if(user === answer){
        console.log("Yes, you are right");
        score = score + 1;
        
    }
    else{
        console.log("Oops! , you are wrong");
        score = score - 1;
        
    }

}

myInfo("where your are working", "pune");
myInfo("In which company","Google");
console.log("Your Score Is " + score);
