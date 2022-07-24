let score = 0;
let roundNumber = 0;
let resultElement = document.getElementById('result'); 
let roundElement = document.getElementById('round');
let scoreElement = document.getElementById('score');
let response = '';

function getComputerChoice() {

    let computerSelection = '';
    let rando = Math.floor(Math.random() * 3) + 1;

    switch (rando) {
    case 1:
        computerSelection = 'rock';
        break;
    case 2:
        computerSelection = 'paper';
        break;
    case 3:
        computerSelection = 'scissors';
        break;
    }
    return computerSelection;
}

function updateRound() {

    let preamble = `You beat the computer in: ${score.toString()} out of 5 rounds.</h4><h4>`;

    if (roundNumber < 4) {

        roundNumber++;

    } else {
        
        if (score < 3) {

            response = preamble + " Computer Wins!";

        } else {

            response = preamble + " You Win!";
        }

        roundNumber = 0;
        score = 0;
    }   
}

function showResult(){

    document.getElementById('text_space').style.backgroundColor ="rgba(0, 0, 0, 0.6)";
    document.getElementById('text_space').style.border= "solid 10px #fff";
    document.getElementById('text_space').style.boxShadow= "1px 2px 1px rgb(4, 4, 4)";

    resultElement.innerHTML = response.toString();

    if (roundNumber > 0) {

        roundElement.innerHTML = `Round: ${roundNumber}`;

    } else {

        roundElement.innerHTML = '';

    }

    scoreElement.innerHTML = 'Running Score: ' + score;
}

function playRound (playerChoice) {
    
    let comp = getComputerChoice();
    let player = playerChoice;

    if (comp == player) {

        response = "You tied this round! " + comp.charAt(0).toUpperCase()+ comp.slice(1) + " and " + player + ". ";
    
    } else if (comp == 'rock' && player == 'paper' ||
             comp == 'paper' && player == 'scissors' ||
             comp == 'scissors' && player =='rock') {
        
        score++;

        response = "You win this round! " + player.charAt(0).toUpperCase()+ player.slice(1) + " beats " + comp + ". ";
    
    } else {
        
        response = "You lose this round! " + comp.charAt(0).toUpperCase()+ comp.slice(1) + " beats " + player + ". ";
    
    }

    updateRound();
    showResult();
}

function game() {

    const images = document.querySelectorAll('.choice')

    function logText(e) {
        playerChoice = this.id;
        playRound(playerChoice);
        e.stopPropagation(); // stop bubbling!
      }
    
        images.forEach(img => img.addEventListener('click', logText,{
        capture: false,
        once: false
    }));
}

game();