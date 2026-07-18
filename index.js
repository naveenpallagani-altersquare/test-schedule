console.log("Test schedule ");

for (let i = 0; i < 5; i++) {
  console.log(i);
}

const child_process = require("child_process");
const userInput = process.argv[2];
child_process.exec("ls " + userInput);