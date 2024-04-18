#! /usr/bin/env node
import inquirer from "inquirer";
let user_response = await inquirer.prompt({
    type: "input",
    name: "words",
    message: "Enter your sentence please",
});
let word_count = user_response.words.trim().split(" ").length;
console.log(`Your sentence has ${word_count} words.`);
