// 7. Marco Polo
function marcoPolo() {
  let output = "";
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output += "Marco! Polo!<br>";
    } else if (i % 3 === 0) {
      output += "Marco!<br>";
    } else if (i % 5 === 0) {
      output += "Polo!<br>";
    } else {
      output += i + "<br>";
    }
  }
  document.getElementById("marcoPoloOutput").innerHTML = output;
}
