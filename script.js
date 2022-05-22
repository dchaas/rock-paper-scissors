console.log("Hello World");

const OPTIONS = ['rock','paper','scissors'];

function computerPlayer() {
    let random = Math.floor(Math.random()*3);
    return OPTIONS[random];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection == 'paper') {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`
    } else if (playerSelection === 'rock' && computerSelection == 'scissors') {
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    } else if (playerSelection === 'paper' && computerSelection == 'scissors') {
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    } else if (playerSelection === 'paper' && computerSelection == 'rock') {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`
    }  else if (playerSelection === 'scissors' && computerSelection == 'paper') {
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    } else if (playerSelection === 'scissors' && computerSelection == 'rock') {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`
    } else {
        return `Draw (${playerSelection} and ${computerSelection}), try again.`
    }

}

const playerSelection = 'rock';
const computerSelection = computerPlayer();
console.log(playRound(playerSelection,computerSelection));