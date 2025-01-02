console.log(`The computer plays... ${getComputerChoice()}!`);
console.log(`The user plays... ${getHumanChoice()}! `);

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
    choice = prompt(PROMPT_MESSAGE);

    // validate input
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      needHumanChoice = false;
    }

  }

  return choice;
}