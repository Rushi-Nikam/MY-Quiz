let readline = require("readline-sync");
let userName = readline.question("What's your name?")
let score = 0
function log(data){
    console.log(data);
    
}
log("welcome "+ userName + " Do You Know Rushikesh");
function game(question,answers){
    let userAns = readline.question(question);
    if(userAns === answers){
        log('right');
        score = score + 1 ;
    }
    else{
        log("wrong");
        score = score -1
    }

    log("current Score"+ score);
    log("-------");
}
let questionOne = {
    question:"Where do i live",
    ans:"pune",
}
let questionTwo = {
    question:"Where are you working",
    ans:"google",
}
let questionThree = {
    question:"who is your favourite superhero",
    ans:"spider man",
}

// game(questionOne.question,questionOne.ans);
// game(questionTwo.question,questionTwo.ans);
// game(questionThree.question,questionThree.ans);
// other way 
let questions = [questionOne,questionTwo,questionThree];

for (let i = 0; i < questions.length; i++) {
   let currentQuestion = questions[i];
   game(currentQuestion.question,currentQuestion.ans);
    
}

log("you Score"+ score);

// create a friend quiz