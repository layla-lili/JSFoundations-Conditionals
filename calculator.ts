const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter first number ? ", (firstNum: string | number) => {
  rl.question("Enter second number? ", (secondNum: string | number) => {
    rl.question("Enter operation? ", (operation: string) => {
      if (firstNum === "" || secondNum === "" || operation === "") {
        firstNum = 1;
        secondNum = 1;
        operation = "+";
        console.log(firstNum + secondNum);
      } else {
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        // Write if-statements here
        if (operation === "+") console.log(firstNum + secondNum);
        else if (operation === "-") console.log(firstNum - secondNum);
        else if (operation === "*") console.log(firstNum * secondNum);
        else if (operation === "/") console.log(firstNum / secondNum);
        else console.log("invlide operation");
      }
      rl.close();
    });
  });
});
//process.exit(0);
