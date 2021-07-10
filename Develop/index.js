//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'What is your username?',
        name: 'user',
    },
    {
        message: 'What is your GitHub user email?',
        name: 'email',
    },
    {
        message: 'What is the project title?',
        name: 'title',
    },
    {
        message: 'Please enter a short description of the project.',
        name: 'description',
    },
    {
        message: 'How does a user INSTALL this application?',
        name: 'install',
    },
    {
        message: 'How will a user USE this application?',
        name: 'usage',
    },
    {
        message: 'What Licenses are required?',
        name: 'license',
    },
    {
        message: 'What are the guidelines for contribution?',
        name: 'guidelines',
    },
    {
        message: 'What is the test process?',
        name: 'tests',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {

    // ask questions
    inquirer.prompt(questions)

    // assemble answers
    .then((answer) => {

    // write result in file
    fs.appendFile('ReadMe.md', answer);
    })

    //console err if err
    .catch((err) => {
        console.log(err);
    })
};

// Function call to initialize app
init();
