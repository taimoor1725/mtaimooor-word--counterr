#! /usr/bin/env node

//  this is called a shebang, it tells the OS to run it with node js 

// impport "inquirer" module, which is a command line interfce for Node.js
import inquirer from "inquirer"

// Declare a constant "answer" and assign it to the result of inquirer.promt function

const answer:{
Sentence: string
} = await inquirer.prompt([
    
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }

])

// split is liye use krty hen k jitny bh apky pass elements hongy unko humen array 
// ki form men convert karne hen take hum words ko console per dekh saken

const words = answer.Sentence.trim().split(" ")

// print the arrow of words to the console
console.log(words);

// print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
