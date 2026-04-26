/*
    get computer decision
    get human user decision
    decide winner
*/

const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const WIN = "You Win";
const LOSE = "Computer Wins";
const DRAW = "Draw";

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

const resultDiv = document.querySelector("#results");

const winner = document.createElement("h1");
resultDiv.append(winner);
const scores = document.createElement("p");
resultDiv.append(scores);


let userScore = 0;
let computerScore = 0;


function playRound(event){
    let result;

    let computerChoice = computerDecision();
    let userChoice = userDecision(event.target.id);

    if(userChoice == ROCK){
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
    else if(userChoice == PAPER){
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
    else if(userChoice == SCISSORS){
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

    winner.textContent = result;
    scores.textContent = `You: ${userScore}; Computer: ${computerScore}`;

    if(userScore == 5){
        winner.textContent = "User Wins Best of 9";
        scores.textContent = "Pick again to play another match"
        userScore = 0;
        computerScore = 0;
    }
    else if(computerScore == 5){
        winner.textContent = "Computer Wins Best of 9";
        scores.textContent = "Pick again to play another match"
        userScore = 0;
        computerScore = 0;
    }
}

function computerDecision(){
    let decision = Math.floor(Math.random() * 3);
    console.log(decision);
    return decision;
}

function userDecision(btnId){
    switch(btnId){
        case rockBtn.id:
            return ROCK;
        case paperBtn.id:
            return PAPER;
        case scissorsBtn.id:
            return SCISSORS;
    }
}

rockBtn.addEventListener('click', playRound);
paperBtn.addEventListener('click', playRound);
scissorsBtn.addEventListener('click', playRound);
