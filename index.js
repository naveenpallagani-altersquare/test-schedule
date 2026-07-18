console.log("Test schedule ");

for (let i = 0; i < 5; i++) {
  console.log(i);
}

const { exec } = require("child_process");
const userInput = process.argv[2];
exec("ls " + userInput);