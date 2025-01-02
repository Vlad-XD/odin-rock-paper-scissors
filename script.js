// player/computer scores
let humanScore = 0;
let computerScore = 0;


while (humanScore < 1) {
  playRound(getHumanChoice(), getComputerChoice());
}

/*
  playRound: takes human and computer player choices as arguments,
             increases corresponding score depending on who wins game,
             and returns a message on the console.
  Parameters: string humanChoice, string computerChoice
  Return value: N/A
*/
function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "rock" :
      switch (computerChoice) {
        case "rock" :
          console.log("It is a tie!");
          break;
        case "paper" :
          console.log("You lose! Paper beats Rock!");
          computerScore++;
          break;
        case "scissors" :
          console.log("You win! Rock beats Scissors!");
          humanScore++;
          break;
      }
      break;

    case "paper" :
      switch (computerChoice) {
        case "rock" :
          console.log("You win! Paper beats Rock!");
          humanScore++;
          break;
        case "paper" :
          console.log("It is a tie!");
          break;
        case "scissors" :
          console.log("You lose! Scissors beat Paper!");
          computerScore++;
          break;
      }      
      break;

    case "scissors" :
      switch (computerChoice) {
        case "rock" :
          console.log("You lose! Rock beats Scissors!");
          computerScore++;
          break;
        case "paper" :
          console.log("You win! Scissors beat Paper!");
          humanScore++;
          break;
        case "scissors" :
          console.log("It is a tie!");
          break;
      }          
      break;
  }

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