playGame();

/*
  playGame: plays rock, paper, scissor game for five rounds
            and declares winner at the end of five rounds.
  Parameters: N/A
  Return value: N/A
*/

function playGame() {
  // variable initializations
  const START_MESSAGE = "Let's play...Rock-Paper-Scissors! Best of 5 wins the game."
  const WIN_MESSAGE = "Player has won!"
  const LOSE_MESSAGE = "Computer has won!"
  const TIE_MESSAGE = "Tie!"
  let humanScore = 0;
  let computerScore = 0;
  let winnerValue = 0;

  // start of game message
  console.log(START_MESSAGE);

  // play five rounds
  for (let i = 0; i < 5; i++) {
    winnerValue = playRound(getHumanChoice(), getComputerChoice());
    //adjust score based on winner value
    if (winnerValue === 1) {
      humanScore++;
    } else if (winnerValue === -1) {
      computerScore++;
    }
  }

  // declare winner at the end of five rounds
  if (humanScore > computerScore) {
    console.log(WIN_MESSAGE + ` Final Score: ${humanScore} to ${computerScore}.`);
  } else if (humanScore < computerScore) {
    console.log(LOSE_MESSAGE + ` Final Score: ${computerScore} to ${humanScore}.`);  
  } else {
    console.log(TIE_MESSAGE + ` Final Score: ${computerScore} to ${humanScore}.`);
  }
  
}

/*
  playRound: takes human and computer player choices as arguments,
             sets bool variable to indicate how to increase score,
             and returns a message on the console.
  Parameters: string humanChoice, string computerChoice
  Return value: int winnerScore (equal to 1 if player wins, equal 
                to 0 if tie, and equal to -1 if computer wins)
*/

function playRound(humanChoice, computerChoice) {
  // variable initializations
  let winnerScore = 0;

  switch (humanChoice) {
    case "rock" :
      switch (computerChoice) {
        case "rock" :
          console.log("It is a tie!");
          break;
        case "paper" :
          console.log("You lose! Paper beats Rock!");
          winnerScore--;
          break;
        case "scissors" :
          console.log("You win! Rock beats Scissors!");
          winnerScore++;
          break;
      }
      break;

    case "paper" :
      switch (computerChoice) {
        case "rock" :
          console.log("You win! Paper beats Rock!");
          winnerScore++;
          break;
        case "paper" :
          console.log("It is a tie!");
          break;
        case "scissors" :
          console.log("You lose! Scissors beat Paper!");
          winnerScore--;
          break;
      }      
      break;

    case "scissors" :
      switch (computerChoice) {
        case "rock" :
          console.log("You lose! Rock beats Scissors!");
          winnerScore--;
          break;
        case "paper" :
          console.log("You win! Scissors beat Paper!");
          winnerScore++;
          break;
        case "scissors" :
          console.log("It is a tie!");
          break;
      }          
      break;
  }

  return winnerScore;

}

/*
  getComputerChoice: randomly returns one of the following strings:
                      "rock", "paper", "scissors".
  Parameters: N/A
  Return value: string
*/

function getComputerChoice() {
  // variable initializations
  let choice = "";
  let randomNum = Math.random();

  if (randomNum <= 0.33){
    choice = "rock";
  }
  else {
    choice = (randomNum >= 0.66) ? "paper" : "scissors"; 
  }

  return choice;
}

/*
  getHumanChoice: prompt user for choice and validate it is either
                    "rock", "paper", or "scissors".
  Parameters: N/A
  Return value: string
*/

function getHumanChoice() {
  // variable initilizations
  const PROMPT_MESSAGE = "Enter a choice between rock, paper, or scissors:";
  let choice = "";
  let needHumanChoice = true;

  // loop until valid choice is entered in prompt
  while (needHumanChoice) {
    // prompt user
    choice = prompt(PROMPT_MESSAGE).toLowerCase();

    // validate input
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      needHumanChoice = false;
    }

  }

  return choice;
}