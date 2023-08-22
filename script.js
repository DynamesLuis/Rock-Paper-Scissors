const buttons = document.querySelectorAll('.btn');
const div_result = document.querySelector('.result');
const player_span = document.getElementById('player-span');
const computer_span = document.getElementById('computer-span');
const body = document.querySelector("body");
const popup = document.querySelector(".popup");
let computerCount = 0;
let playerCount = 0;

buttons.forEach((button) => {
    const id_button = button.getAttribute('id')
    button.addEventListener('click', () => {
        const text_result = playSingleRound(id_button, getComputerChoice())
        setTimeout(() => {
            div_result.textContent = text_result; 
        },10);
        div_result.classList.remove("active");
        setTimeout(() => {
            div_result.classList.add("active");
        },10);
        pointCounter(text_result);
        setTimeout(() => {
            player_span.textContent = playerCount;
            computer_span.textContent = computerCount;
        },1000)
        setTimeout(() => {
            showWinner();
        }, 2000);
    });
});

function playSingleRound (playerSelection, computerSelection) {
    const playerSelectionNormalized = normalizedString(playerSelection);
    if (playerSelectionNormalized === computerSelection) {
        return "It's a tie"
    } 

    if (playerSelectionNormalized === "Rock" && computerSelection === "Paper") {
        return `You lose!, ${computerSelection} beats ${playerSelectionNormalized}`
    } else if(playerSelectionNormalized === "Rock" && computerSelection === "Scissors") {
        return `You win!, ${playerSelectionNormalized} beats ${computerSelection}`
    }

    if (playerSelectionNormalized === "Paper" && computerSelection === "Rock") {
        return `You win!, ${playerSelectionNormalized} beats ${computerSelection}`
    } else if (playerSelectionNormalized === "Paper" && computerSelection === "Scissors") {
        return `You lose!, ${computerSelection} beats ${playerSelectionNormalized}`
    }

    if (playerSelectionNormalized === "Scissors" && computerSelection === "Rock") {
        return `You lose!, ${computerSelection} beats ${playerSelectionNormalized}` 
    } else if (playerSelectionNormalized === "Scissors" && computerSelection === "Paper") {
        return `You win!, ${playerSelectionNormalized} beats ${computerSelection}`
    }
}

function getComputerChoice() {
    const choicePossible = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * choicePossible.length);
    return choicePossible[randomChoice];
}

function normalizedString(String) {
    const firstCharacter = String.charAt(0);
    const remainingCharacters = String.slice(1);
    return firstCharacter.toUpperCase() + remainingCharacters.toLowerCase();
}
// function play() {
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = normalizedString(prompt("Ingresa tu elección", "Rock/Paper/Scissors"));
//         const computerSelection = getComputerChoice();
        
//         console.log(`Selección del usuario: ${playerSelection}\nSelección del computador: ${computerSelection}`);
//         console.log(playSingleRound(playerSelection,computerSelection));
//     }
// }

function pointCounter(partialResult) {
    if (partialResult.includes("win")) {
        playerCount += 1;
    } else if(partialResult.includes("lose")) {
        computerCount += 1;
    }
}
function showWinner() {
    if (playerCount === 5) {
        popup.innerHTML = `
            <h2>You are the winner 😁</h2>
            <button>Try again</button>
        `;
        body.classList.add("active");
    } else if (computerCount === 5) {
        popup.innerHTML = `
            <h2>Computer is the winner 🥹</h2>
            <button>Try again</button>
        `;
        body.classList.add("active");
    }

    if (body.classList.contains("active")) {
        const retryBtn = document.querySelector(".popup button");
        retryBtn.addEventListener('click', () => {
        computerCount = 0;
        playerCount = 0;
        player_span.textContent = 0;
        computer_span.textContent = 0;
        div_result.textContent = "";
        body.classList.remove("active");
        });
    }
}