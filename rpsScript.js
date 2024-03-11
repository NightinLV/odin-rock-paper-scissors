let playerScore = 0;
let computerScore = 0; 

function computerChoice() {
    let randomNum = Math.floor (Math.random() * 3); {
    }
    switch (randomNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

let buttons = document.querySelector('#container');

buttons.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            playRound(rock);
            break;
        case 'paper':
            playRound(paper);
            break;
        case 'scissors':
            playRound(scissors);
            break;
    }
});

let para = document.querySelector('#para');
let secondPara = document.querySelector('#secondPara');
let thirdPara = document.querySelector('#thirdPara')

function playRound(playerSelection) {
    playerSelection.value.toString();
    let computerSelection = computerChoice();
    para.textContent = `You chose ${playerSelection.value}, the computer chose ${computerSelection}.`;
    
    if (playerSelection.value === computerSelection) {
       secondPara.textContent = "You tied!"
    } else if (playerSelection.value === "rock") {
        if (computerSelection === "paper") {
            secondPara.textContent = "You lost, paper beats rock!";
            computerScore++;
            } else {
            secondPara.textContent = "You won, rock beats scissors!";
            playerScore++;
        }

    } else if (playerSelection.value === "paper") {
        if (computerSelection === "scissors") {
            secondPara.textContent = "You lost, scissors beats paper!";
            computerScore++;
        } else {
            secondPara.textContent = "You won, paper beats rock!";
            playerScore++;
        }
    } else if (playerSelection.value === "scissors") {
        if (computerSelection === "rock") {
            secondPara.textContent = "You lost, rock beats scissors!";
            computerScore++;
        } else {
            secondPara.textContent = "You won, paper beats rock!";
            playerScore++;
        }
    }

    thirdPara.textContent = `Player score: ${playerScore} Computer Score: ${computerScore}`;

}
