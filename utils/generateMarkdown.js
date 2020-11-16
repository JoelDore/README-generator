// function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}\n\n
  ![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)\n\n
  ## Description\n\n
  ${data.description}\n\n
  ## Table of Contents\n\n
  * [Description](#Description)\n
  * [Installation](#Installation)\n
  * [Usage](#Usage)\n
  * [Contributing](#Contributing)\n
  * [Tests](#Tests)\n
  * [Questions](#Questions)\n
  * [License](#License)\n\n
  ## Installation\n\n
  ${data.installation}\n\n
  ## Usage\n\n
  ${data.usage}\n\n
  ## Contributing\n\n
  ${data.contributing}\n\n
  ## Tests\n\n
  ${data.tests}\n\n
  ## Questions\n\n
  Feel free to send me an email at ${data.email}, or contact me on [Github](https://github.com/${data.githubUser})\n\n
  ## License\n\n
  This project is licensed under the ${data.license} license.\n
`;
}

export default { generateMarkdown }