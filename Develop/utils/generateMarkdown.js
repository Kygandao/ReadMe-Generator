function renderLicenseBadge(answer) {
  const licenseType = answer.license;
  let licenseBadge = ' ';
  if (licenseType === 'Apache 2.0') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (licenseType === 'GNU GPL v3') {
    licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (licenseType === 'MIT') {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (licenseType === 'BSD 2-Clause') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  } else if (licenseType === 'BSD 3-Clause') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (licenseType === 'Boost Software License 1.0') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (licenseType === 'CC0') {
    licenseBadge = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
  } else if (licenseType === 'Eclipse Public License 1.0') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  } else if (licenseType === 'GNU AGPL v3') {
    licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  } else if (licenseType === 'GNU GPL v2') {
    licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  } else if (licenseType === 'GNU LGPL v3') {
    licenseBadge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
  } else if (licenseType === 'Mozilla Public License 2.0') {
    licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if (licenseType === 'The Unlicense') {
    licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  } else if (licenseType === 'None') {
    licenseBadge = ' ';
  }
  return licenseBadge
};

function generateMarkdown(answer) {
  return `
# ${answer.title}
  
## Table of Contents:
  1. [Username](#username)
  2. [Email](#email)
  3. [Description](#description)
  4. [Installation](#installation)
  5. [Usage](#usage)
  6. [License](#license)
  7. [Contribution Guidelines](#contributing-guidelines)
  8. [Testing](#testing)
  9. [Video Link](#video-link)
  10.[Screenshot])#screenshot

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
${answer.tests}

## Video Link
[Click here to view the video](${answer.link})

## Screenshot
![Project Screenshot](${answer.screenshot})
`
}

module.exports = generateMarkdown;