var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter first number ? ", function (firstNum) {
    rl.question("Enter second number? ", function (secondNum) {
        rl.question("Enter operation? ", function (operation) {
            if (firstNum === "" || secondNum === "" || operation === "") {
                firstNum = 1;
                secondNum = 1;
                operation = "+";
                console.log(firstNum + secondNum);
            }
            else {
                firstNum = Number(firstNum);
                secondNum = Number(secondNum);
                // Write if-statements here
                if (operation === "+")
                    console.log(firstNum + secondNum);
                else if (operation === "-")
                    console.log(firstNum - secondNum);
                else if (operation === "*")
                    console.log(firstNum * secondNum);
                else if (operation === "/")
                    console.log(firstNum / secondNum);
                else
                    console.log("invlide operation");
            }
            rl.close();
        });
    });
});
//process.exit(0);
