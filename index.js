const prompt = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// array of questions for user
const questions = [
    "Enter title of project",
    "Enter a short description",
    "Enter installation instructions",
    "Enter usage information",
    "Enter contribution guidelines",
    "Enter test instructions",
    "Enter your email address",
    "Enter your GitHub username",
    "Select a license",
]

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "UTF-8", (err) => {
        err ? console.log(err) : console.log("Success! Now take a break - you've earned it :)")
    })
}

// function to initialize program
function init() {

    // License options: MIT, GPLv3, Apache 
}

// function call to initialize program
init();
