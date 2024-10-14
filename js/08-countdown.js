// 8. Countdown
function countdown() {
  let startNumber = prompt("Enter a number to count down from:");
  let output = "";

  if (isNaN(startNumber) || startNumber === null || startNumber.trim() === "") {
    alert("Please enter a valid number.");
    return;
  }

  startNumber = parseInt(startNumber);

  for (let i = startNumber; i >= 0; i--) {
    output += i + "<br>";
  }
  document.getElementById("countdownOutput").innerHTML = output;
}
