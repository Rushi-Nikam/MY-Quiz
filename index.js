let readlineSync = require("readline-Sync");
let score = 0;
let userName = readlineSync.question("what is your Name");
console.log("Welcome " + userName + " Do YOU KNOW Rushi?");
function play(question,answer){
let userAnswer= readlineSync.question(questions);
if(userAnswer.toUpperCase() === answer.toUpperCase()){
console.log('Right')
score = score + 1;

}
else{
console.log("wrong")
}
console.log("current score is : " + score);
console.log('--------------')
}
let questions = [{
question:"where do I live. \n 1).pune \n 2).Bangalore  \n 3).Goa",
answer: "2).Bangalore"
},
{
question:"My favorite superhero would be  1).superman \n 2).Spiderman \n 3).Batman",
answer: "2).Spiderman"
},
{
question:"where do i work. \n 1).Microsoft \n 2).5Dsolutions  \n 3).JPMorgans",
answer: "1).Microsoft"
}]