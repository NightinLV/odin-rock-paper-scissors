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

let computerButtons = Array.from(document.querySelectorAll('.computer-buttons'));

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

let playerScoreDisplay = document.querySelector('#playerScore');
let computerScoreDisplay = document.querySelector('#computerScore');

function resetButtonStyle() {
    computerButtons.forEach(compButton => {
        compButton.setAttribute("style", "border: black solid 10px; background-color: #c58c27");
    });
    buttons.forEach(button => {
        button.setAttribute("style", "border: black solid 10px; background-color: #c58c27");
    });
}

let para = document.querySelector('#para');

function playRound(playerSelection) {
    resetButtonStyle();
    playerSelection.toString();
    let computerSelection = computerChoice();
    
    if (playerSelection === computerSelection) {
       para.textContent = "You tied!"
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            computerScoreDisplay.textContent = `${computerScore}`;
            computerButtons[1].setAttribute("style", "border: #65ff17 solid 10px; background-color: #00ce22");
            buttons.item(0).setAttribute("style", "border: #7f0018 solid 10px; background-color: #ff0000");
            } else {
            playerScore++;
            playerScoreDisplay.textContent = `${playerScore}`;
            buttons.item(0).setAttribute("style", "border: #65ff17 solid 10px; background-color: #00ce22");
            computerButtons[2].setAttribute("style", "border: #7f0018 solid 10px; background-color: #ff0000");
        }

    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore++;
            computerScoreDisplay.textContent = `${computerScore}`;
            computerButtons[2].setAttribute("style", "border: #65ff17 solid 10px; background-color: #00ce22");
            buttons.item(1).setAttribute("style", "border: #7f0018 solid 10px; background-color: #ff0000");
        } else {
            playerScore++;
            playerScoreDisplay.textContent = `${playerScore}`;
            buttons.item(1).setAttribute("style", "border: #65ff17 solid 10px; background-color: #00ce22");
            computerButtons[0].setAttribute("style", "border: #7f0018 solid 10px; background-color: #ff0000");
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            computerScoreDisplay.textContent = `${computerScore}`;
            computerButtons[0].setAttribute("style", "border: #65ff17 solid 10px; background-color: #00ce22");
            buttons.item(2).setAttribute("style", "border: #7f0018 solid 10px; background-color: #ff0000");
        } else {
            playerScore++;
            playerScoreDisplay.textContent = `${playerScore}`;
            buttons.item(2).setAttribute("style", "border: #65ff17 solid 10px; background-color: #00ce22");
            computerButtons[1].setAttribute("style", "border: #7f0018 solid 10px; background-color: #ff0000");
        }
    }

    if (playerScore === 5) {
        para.textContent = "You won the game! Refresh the page to play again.";
        disableButtons();
    } else if (computerScore === 5) {
        para.textContent = "You lost the game! Refresh the page to play again.";
        disableButtons();
    }

}
