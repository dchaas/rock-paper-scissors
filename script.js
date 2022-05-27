console.log("Hello World");

const OPTIONS = ['rock','paper','scissors'];

const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');
const btns = document.querySelectorAll('button');
const results = document.querySelector("#results");

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
        results.textContent = `You Lose! ${playerSelection} loses to ${computerSelection}.`;
    } else if (playerSelection === 'rock' && computerSelection == 'scissors') {
        results.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === 'paper' && computerSelection == 'scissors') {
        results.textContent =  `You Lose! ${playerSelection} loses to ${computerSelection}.`;
    } else if (playerSelection === 'paper' && computerSelection == 'rock') {
        results.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
    }  else if (playerSelection === 'scissors' && computerSelection == 'paper') {
        results.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === 'scissors' && computerSelection == 'rock') {
        results.textContent = `You Lose! ${playerSelection} loses to ${computerSelection}.`;
    } else {
        results.textContent =  `Draw (${playerSelection} and ${computerSelection}), try again.`;
    }

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