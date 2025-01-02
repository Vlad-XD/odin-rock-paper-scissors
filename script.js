console.log(`The computer plays... ${getComputerChoice()}!`);

/*
  getComputerChoice: randomly returns one of the following strings:
                      "rock", "paper", "scissors"
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