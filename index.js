import { prompt } from "inquirer";
import { generateMarkdown } from "./utils/generateMarkdown";
import { fs } from "fs";

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
}

// function to initialize program
function init() {

    // License options: MIT, GPLv3, Apache 
}

// function call to initialize program
init();
