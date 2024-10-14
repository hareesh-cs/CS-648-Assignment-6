// 2. Coin Flip Game
function coinFlipGame() {
  let coinFlip = Math.floor(Math.random() * 2);
  let choice = prompt("Heads or Tails?").toLowerCase();

  if (choice !== "heads" && choice !== "tails") {
    alert("Please enter either 'Heads' or 'Tails'.");
    return;
  }

  let result = "";

  if (coinFlip === 0 && choice === "heads") {
    result = "The flip was heads and you chose heads...you win!";
  } else if (coinFlip === 0 && choice === "tails") {
    result = "The flip was heads but you chose tails...you lose!";
  } else if (coinFlip === 1 && choice === "heads") {
    result = "The flip was tails but you chose heads...you lose!";
  } else if (coinFlip === 1 && choice === "tails") {
    result = "The flip was tails and you chose tails...you win!";
  }
  alert(result);
}
