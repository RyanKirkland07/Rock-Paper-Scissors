/*
    get computer decision
    get human user decision
    decide winner
*/

const rock = 0;
const paper = 1;
const scissors = 2;

function rockpaperscissors(){
    let cont = 1;
    while(cont != 0){
        let computerChoice = computerDecision();
        let userChoice = userDecision();
        console.log(winner(userChoice, computerChoice));
        cont = prompt("Continue? (any for yes 0; 0 for no)")
    }

}

function computerDecision(){
    let decision = Math.floor(Math.random() * 3);
    console.log(decision);
    return decision;
}

function userDecision(){
    let decision = prompt("rock, paper, or scissors").toLowerCase();
    if(decision != "rock" && decision != "paper" && decision != "scissors"){
        throw new Error("User made illegal move")
    }
    
    return decision;
}

function winner(userDecision, computerDecision){
    if(userDecision == "rock"){
        if(computerDecision == rock){
            return "Draw"
        }
        else if(computerDecision == paper){
            return "You Lose"
        }
        else if(computerDecision == scissors){
            return "You Win"
        }
    }
    else if(userDecision == "paper"){
        if(computerDecision == rock){
            return "You Win"
        }
        else if(computerDecision == paper){
            return "Draw"
        }
        else if(computerDecision == scissors){
            return "You Lose"
        }
    }
    else if(userDecision == "scissors"){
        if(computerDecision == rock){
            return "You Lose"
        }
        else if(computerDecision == paper){
            return "You Win"
        }
        else if(computerDecision == scissors){
            return "Draw"
        }
    }
}

rockpaperscissors();
console.log("test");
