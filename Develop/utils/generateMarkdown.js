// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answer) {
  const licenseType = answer.license[0];
  let licenseName = ' ';
  if (licenseType === 'Apache 2.0 License') {
    licenseName = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  } else if (licenseType === 'GNU GPL v3') {
    licenseName = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'The MIT License') {
    licenseName = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'BSD 2-Clause License') {
    licenseName = `![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)`
  } else if (licenseType === 'BSD 3-Clause License') {
    licenseName = `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`
  } else if (licenseType === 'Boost Software License 1.0') {
    licenseName = `![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)`
  } else if (licenseType === 'CC0') {
    licenseName = `![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)`
  } else if (licenseType === 'Eclipse Public License 1.0') {
    licenseName = `![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)`
  } else if (licenseType === 'GNU AGPL v3') {
    licenseName = `![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)`
  } else if (licenseType === 'GNU GPL v2') {
    licenseName = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  } else if (licenseType === 'GNU LGPL v3') {
    licenseName = `![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`
  } else if (licenseType === 'Mozilla Public License 2.0') {
    licenseName = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
  } else if (licenseType === 'The Unlicense') {
    licenseName = `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`
  } return licenseName
};

function generateMarkdown(answer) {
  return `
# ${answer.title}
  
## Table of Contents:
  1. [Username](## Username)
  2. [Email](## Email)
  3. [Description](## Description)
  4. [Installation](## Installation)
  5. [Usage](## Usage)
  6. [License](## License)
  7. [Contribution Guidelines](## Guidelines)
  8. [Testing](## Testing)

## Username
${answer.user}

## Email
${answer.email}

## Description
${answer.description}

## Installation
${answer.install}

## Usage
${answer.usage}

## License
${renderLicenseBadge(answer)}

## Contribution Guidelines
${answer.guidelines}

## Testing
${answer.tests}`
}

module.exports = generateMarkdown;