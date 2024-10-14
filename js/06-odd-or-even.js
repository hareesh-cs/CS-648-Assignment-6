// 6. Odd or Even
function oddOrEven() {
  let output = "";
  for (let i = 0; i <= 15; i++) {
    console.log(`${i} is ${i % 2 === 0 ? "even" : "odd"}`);
  }
  document.getElementById("oddEvenOutput").innerHTML = output;
}
