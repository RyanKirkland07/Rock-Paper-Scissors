/*
    get computer decision
    get human user decision
    decide winner
*/

const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const WIN = "You Win";
const LOSE = "You Lose";
const DRAW = "Draw";

function playRound(rounds){
    let result;

    let userScore = 0;
    let computerScore = 0;

    while(rounds > 0){
        let computerChoice = computerDecision();
        let userChoice = userDecision();

        if(userChoice == "rock"){
            if(computerChoice == ROCK){
                result = DRAW;
            }
            else if(computerChoice == PAPER){
                result = LOSE;
            }
            else if(computerChoice == SCISSORS){
                result = WIN;
            }
        }
        else if(userChoice == "paper"){
            if(computerChoice == ROCK){
                result = WIN;
            }
            else if(computerChoice == PAPER){
                result = DRAW;
            }
            else if(computerChoice == SCISSORS){
                result = LOSE;
            }
        }
        else if(userChoice == "scissors"){
            if(computerChoice == ROCK){
                result = LOSE;
            }
            else if(computerChoice == PAPER){
                result = WIN;
            }
            else if(computerChoice == SCISSORS){
                result = DRAW;
            }
        }

        if(result == WIN){
            userScore += 1;
        }
        else if(result == LOSE){
            computerScore += 1;
        }

        console.log(result);
        console.log(`You: ${userScore}; Computer: ${computerScore}`)
        rounds = rounds - 1;
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

playRound(5);
console.log("test");
