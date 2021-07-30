function generateReadMe() {

const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./Develop/utils/generateMarkdown');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your username?',
            name: 'user',
        },
        {
            type: 'input',
            message: 'What is your GitHub user email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please enter a short description of the project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'How does a user INSTALL this application?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'How will a user USE this application?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What Licenses are required?',
            name: 'license',
        },
        {
            type: 'input',
            message: 'What are the guidelines for contribution?',
            name: 'guidelines',
        },
        {
            type: 'input',
            message: 'What tests are included to ensure the applicaiton is working?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Please enter the URL to the demonstration video',
            name: 'link'
        },
        {
            type: 'input',
            message: 'Please enter a screenshot link for the ReadMe',
            name: screenshot
        }
    ])

    .then((answer) => {
        return fs.writeFileSync(path.join (process.cwd(), 'README.md'), markdown(answer))
    });
}

generateReadMe();