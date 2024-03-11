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

function playRound(playerSelection) {
    let computerSelection = computerChoice();
    para.textContent = `You chose ${playerSelection.value}, the computer chose ${computerSelection}.`;
    
    if (playerSelection === computerSelection) {
        secondPara.textContent = "You tied!";
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
        secondPara.textContent = "You lost, paper beats rock!";
        }
        else {
            playerScore++;
            secondPara.textContent = "You won, rock beats scissors!";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore++;
            secondPara.textContent = "You lost, scissors beats paper!";
        }
        else {
            playerScore++;
            secondPara.textContent = "You won, paper beats rock!";
        }
    }
    else if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                computerScore++;
                secondPara.textContent = "You lost, rock beats scissors!";
            }
            else {
                playerScore++;
                secondPara.textContent = "You won, scissors beats paper!";
            }
        } 
    }
