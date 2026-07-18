console.log("Test schedule ");

for (let i = 0; i < 5; i++) {
  console.log(i);
}

const child_process = require("child_process");

function runCommand(userInput) {
  child_process.exec("ls " + userInput);
}

runCommand(process.argv[2]);