// 1. Larger or Smaller
function largerOrSmaller() {
  let num1 = prompt("Enter the first number:");
  let num2 = prompt("Enter the second number:");

  if (isNaN(num1) || isNaN(num2) || num1 === "" || num2 === "") {
    alert("Please enter valid numbers.");
    return;
  }

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  let result = "";

  if (num1 > num2) {
    result = `The larger number is: ${num1}`;
  } else if (num2 > num1) {
    result = `The larger number is: ${num2}`;
  } else {
    result = "Both numbers are equal.";
  }
  document.getElementById("largerSmallerResult").textContent = result;
}
