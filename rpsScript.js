let playerScore = 0;
let computerScore = 0;

function computerRand() {
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

let playerChoice = document.querySelector('#container');

playerChoice.addEventListener('click', (e) => {
    let target = e.target;

    switch(target.id) {
        case 'rock':
            console.log('Rock was clicked');
            break;
        case 'paper':
            console.log('Paper was clicked');
            break;
        case 'scissors':
            console.log('Scissors was clicked');
    }
});

/* function playRound() {
    let computerSelection = getComputerChoice()
    let playerSelection = getPlayerChoice()
    console.log(`You chose ${playerSelection}.`)
    console.log(`The computer chose ${computerSelection}.`)
    if (playerSelection === computerSelection) {
        return "You tied!";
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
        return "You lost, paper beats rock!";
        }
        else {
            playerScore++;
            return "You won, rock beats scissors!";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore++;
            return "You lost, scissors beats paper!";
        }
        else {
            playerScore++;
            return "You won, paper beats rock!";
        }
    }
    else if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                computerScore++;
                return "You lost, rock beats scissors!";
            }
            else {
                playerScore++;
                return "You won, scissors beats paper!";
            }
        } 
    }
do {
    console.log(playRound());
    console.log(`Computer: ${computerScore}, You: ${playerScore}`)
} while (computerScore < 5 && playerScore < 5);

if (computerScore = 5) {
    alert("You lost! Refresh to play again.")
} else if (playerScore = 5) {
    alert("You won! Refresh to play again.")
} */