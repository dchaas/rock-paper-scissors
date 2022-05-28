console.log("Hello World");

const OPTIONS = ['rock','paper','scissors'];

const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');
const btns = document.querySelectorAll('button');
const results = document.querySelector("#results");
const score = document.querySelector("#score");

let userScore = 0;
let pcScore = 0;

btns.forEach((btn)=> {
    btn.addEventListener('click',
    () => {
        const playerSelection = btn.textContent.toLowerCase();
        const computerSelection = computerPlayer();
        console.log(playerSelection,computerSelection);
        playRound(playerSelection,computerSelection);
    }
    )}
    );


function computerPlayer() {
    let random = Math.floor(Math.random()*3);
    return OPTIONS[random];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection == 'paper') {
        pcScore++;
        results.textContent = `You Lose! ${playerSelection} loses to ${computerSelection}.`;
    } else if (playerSelection === 'rock' && computerSelection == 'scissors') {
        userScore++;
        results.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === 'paper' && computerSelection == 'scissors') {
        pcScore++;
        results.textContent =  `You Lose! ${playerSelection} loses to ${computerSelection}.`;
    } else if (playerSelection === 'paper' && computerSelection == 'rock') {
        userScore++;
        results.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
    }  else if (playerSelection === 'scissors' && computerSelection == 'paper') {
        userScore++;
        results.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === 'scissors' && computerSelection == 'rock') {
        pcScore++;
        results.textContent = `You Lose! ${playerSelection} loses to ${computerSelection}.`;
    } else {
        results.textContent =  `Draw (${playerSelection} and ${computerSelection}), try again.`;
    }
    score.textContent = `Player = ${userScore} vs Computer = ${pcScore}`;
    checkWinner();
}


function checkWinner() {
    if (userScore===5) {
        results.textContent =  `You WON!`;
        results.style.color = "green";
        results.style.fontWeight = "600";
        results.style.fontSize='50px';
    } else if (pcScore===5) {
        results.textContent =  `You LOST!`;
        results.style.color = "red";
        results.style.fontWeight = "600";
        results.style.fontSize='50px';
    }
}