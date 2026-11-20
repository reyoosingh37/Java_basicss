const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a calculation (e.g. 5 + 3): ", (input) => {
  const [first, operator, second] = input.split(" ");
  const a = Number(first);
  const b = Number(second);

  let result;

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = b !== 0 ? a / b : "Cannot divide by zero";
      break;
    default:
      result = "Unknown operator";
  }

  console.log("Result:", result);
  rl.close();
});
