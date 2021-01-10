// Define the numbers and the operation here
let firstNum=1;
let secondNum=1;
let operation='+';



const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

rl.question("Enter first number ? ", function(firstNum) {
   rl.question("Enter second number? ", function(secondNum) {
      rl.question("Enter operation? ", function(operation) {
  
     firstNum=parseInt(firstNum,10);
     secondNum=parseInt(secondNum,10);
   // Write if-statements here
         if(operation === '+') console.log(firstNum+secondNum);

         else if(operation === '-') console.log(firstNum-secondNum);

         else if(operation === '*') console.log(firstNum*secondNum);
         else if(operation === '/') console.log(firstNum/secondNum);

         else console.log("invlide operation");
      
       rl.close();
   });
});
});
//process.exit(0);






   
