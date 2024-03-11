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

let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', event => {
        playRound(button.value);
    });
});

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}

let para = document.querySelector('#para');
let secondPara = document.querySelector('#secondPara');
let thirdPara = document.querySelector('#thirdPara')

function playRound(playerSelection) {
    playerSelection.toString();
    let computerSelection = computerChoice();
    para.textContent = `You chose ${playerSelection}, the computer chose ${computerSelection}.`;
    
    if (playerSelection === computerSelection) {
       secondPara.textContent = "You tied!"
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            secondPara.textContent = "You lost, paper beats rock!";
            computerScore++;
            } else {
            secondPara.textContent = "You won, rock beats scissors!";
            playerScore++;
        }

    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            secondPara.textContent = "You lost, scissors beats paper!";
            computerScore++;
        } else {
            secondPara.textContent = "You won, paper beats rock!";
            playerScore++;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            secondPara.textContent = "You lost, rock beats scissors!";
            computerScore++;
        } else {
            secondPara.textContent = "You won, paper beats rock!";
            playerScore++;
        }
    }

    if (playerScore === 5) {
        fourthPara.textContent = "You won the game! Refresh the page to play again.";
        disableButtons();
    } else if (computerScore === 5) {
        fourthPara.textContent = "You lost the game! Refresh the page to play again.";
        disableButtons();
    }

    thirdPara.textContent = `Player score: ${playerScore} Computer Score: ${computerScore}`;

}
