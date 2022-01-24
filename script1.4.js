const readlineSync = require("readline-sync");

let age, name, town = ''
let x = 'no'
while(x != 'yes'){
  age = readlineSync.question("What's your age ?")
  name = readlineSync.question("What's your name ?")
  town = readlineSync.question("What's your town ?")
  x = readlineSync.question("Are you sure ?")
}
console.log("Congratz")