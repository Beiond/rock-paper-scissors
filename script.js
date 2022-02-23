let choices = ["rock" ,"paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let draw = 0;



//computer returns a random choice between "rock", "paper" or "scissors"
function computerPlay() {
   let computerChoice = choices[Math.floor(Math.random() * choices.length)];
   return computerChoice;
}

//validates if Player selected an appropriate choice. If true, return true. If false, return false
function validateChoice(choice) {
   if (choices.includes(choice)) {
      return true;
   } else {
      return false;
   }
}

//Player receives a prompt to select rock, paper or scissors (let playerChoice)
//If Player cancels (null),  Function ends with a "canceled" alert prompt
//If Player enters or spell "rock", "paper" or "scissors wrong, reset the function"
//Turn Player prompt into lowercase 
function playerPlay() {
   let playerChoice = prompt("Enter: Rock, Paper or Scissors").toLowerCase();

   while (playerChoice == null) {
      return alert("Canceled");
   }

    let check = validateChoice(playerChoice);
     if (check == true) {
      return playerChoice;
   } else {
      alert("You did not enter a valid choice, restarting the process...");
      console.log("You did not enter a valid choice, restarting the process...");
      return playerPlay();
   }

}



function playRound() {

   let playerSelection = playerPlay();
   let computerSelection = computerPlay();

   console.log("Round : " + i);

   if (playerSelection == "rock") {
      if (computerSelection == "paper") {
         computerScore++;
         console.log("You selected : " + playerSelection);
         console.log("CPU Selected : " + computerSelection);
         console.log("returning results...")
         console.log("You lose, Paper beats Rock!");
      } else if (computerSelection == "scissors") {
         playerScore++
         console.log("You selected : " + playerSelection);
         console.log("CPU Selected : " + computerSelection);
         console.log("returning results...")
         console.log("You Win, Rock beats Scissors!");
      } else {
         draw++
         console.log("You selected : " + playerSelection);
         console.log("CPU Selected : " + computerSelection);
         console.log("returning results...")
         console.log("It's a Tie!");
      }
   }

   if (playerSelection == "paper") {
      if (computerSelection == "rock") {
         playerScore++
         console.log("You selected : " + playerSelection);
         console.log("CPU Selected : " + computerSelection);
         console.log("returning results...")
         console.log("You Win, Paper beats Rock!");
      } else if (computerSelection == "scissors") {
         computerScore++
         console.log("You selected : " + playerSelection);
         console.log("CPU Selected : " + computerSelection);
         console.log("returning results...")
         console.log("You Lose, Scissors beats Paper!");

      } else {
         draw++
         console.log("You selected : " + playerSelection);
         console.log("CPU Selected : " + computerSelection);
         console.log("returning results...")
         console.log("It's a Tie!");
      }

   }

   if (playerSelection == "scissors") {
      if (computerSelection == "paper") {
         playerScore++
         console.log("You selected : " + playerSelection);
         console.log("CPU Selected : " + computerSelection);
         console.log("returning results...")
         console.log("You Win, Scissors beats Paper!");
      } else if (computerSelection == "rock") {
         computerScore++
         console.log("You selected : " + playerSelection);
         console.log("CPU Selected : " + computerSelection);
         console.log("returning results...")
         console.log("You Lose, Rock beats Scissors!");
      } else {
         draw++
         console.log("You selected : " + playerSelection);
         console.log("CPU Selected : " + computerSelection);
         console.log("returning results...")
         console.log("It's a Tie!");
      }
   }
}

function game() {

   for (i = 1; i < 6; ++i) {
     // console.log("Round : " + i);//
      playRound();
      console.log("Player Score : " + playerScore);
      console.log("Computer Score : " + computerScore);
      console.log("Draw : " + draw);
      console.log("---------------------------------")
   }

   console.log("Calculating Final Results...")
   console.log(playerScore + " ~ " + computerScore);

   if (playerScore > computerScore) {
      console.log("You Won! Congrats!");
   } else if (playerScore < computerScore) {
      console.log("You Lost! Maybe next time...");
   } else {
      console.log("It's a Draw!");
   }

   let anotherGame = prompt("Would you like to play another Game? Type: " + " yes " + "/" + " no ").toLowerCase();
   if (anotherGame == "yes") {
      game();
   }
}