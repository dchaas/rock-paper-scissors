console.log("Hello World");

const OPTIONS = ['rock','paper','scissors'];

function computerPlayer() {
    let random = Math.floor(Math.random()*3);
    return OPTIONS[random];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection == 'paper') {
        return `You Lose! ${playerSelection} loses to ${computerSelection}.`
    } else if (playerSelection === 'rock' && computerSelection == 'scissors') {
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    } else if (playerSelection === 'paper' && computerSelection == 'scissors') {
        return `You Lose! ${playerSelection} loses to ${computerSelection}.`
    } else if (playerSelection === 'paper' && computerSelection == 'rock') {
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    }  else if (playerSelection === 'scissors' && computerSelection == 'paper') {
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    } else if (playerSelection === 'scissors' && computerSelection == 'rock') {
        return `You Lose! ${playerSelection} loses to ${computerSelection}.`
    } else {
        return `Draw (${playerSelection} and ${computerSelection}), try again.`
    }

}


function getUserChoice() {
    return prompt('Select rock, paper or scissors:','').toLowerCase();
}


function game() {
    let user = 0;
    let computer = 0;
    // will play 5 rounds for a single game
    for (let i=0; i<5; i++)  {
        const playerSelection = getUserChoice();
        const computerSelection = computerPlayer();
        let result = playRound(playerSelection,computerSelection)
        if (result.includes('Win')) {
            user++;
        } else if (result.includes('Lose')) {
            computer++;
        }
        console.log(result);
    }
    if (user>computer) {
        console.log(`You won the game ${user} to ${computer}!`)
    } else if (user<computer) {
        console.log(`You lost the game ${user} to ${computer}!`)
    } else {
        console.log(`Draw ${user} to ${computer}.`)
    }
}

game();