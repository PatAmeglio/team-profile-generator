// Require necessary modules
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generatePage = require("./src/generatePage")

// Require classes for each team member type
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Array to hold team member objects
const team = [];

// Function to prompt user for manager information
function promptManager() {
  console.log("Please enter the following information for the team manager:");
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Name:",
    },
    {
      type: "input",
      name: "id",
      message: "Employee ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Email address:",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Office number:",
    },
  ])
  .then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    team.push(manager);
    promptTeam();
  });
}

// Function to prompt user for team member type and information
function promptTeam() {
  inquirer.prompt([
    {
      type: "list",
      name: "type",
      message: "What type of team member would you like to add?",
      choices: ["Engineer", "Intern", "I'm finished adding team members"],
    },
  ])
  .then(answer => {
    switch (answer.type) {
      case "Engineer":
        promptEngineer();
        break;
      case "Intern":
        promptIntern();
        break;
      default:
        generateHTML();
    }
  });
}

// Function to prompt user for engineer information
function promptEngineer() {
  console.log("Please enter the following information for the engineer:");
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Name:",
    },
    {
      type: "input",
      name: "id",
      message: "Employee ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Email address:",
    },
    {
      type: "input",
      name: "github",
      message: "GitHub username:",
    },
  ])
  .then(answers => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    team.push(engineer);
    promptTeam();
  });
}

// Function to prompt user for intern information
function promptIntern() {
  console.log("Please enter the following information for the intern:");
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Name:",
    },
    {
      type: "input",
      name: "id",
      message: "Employee ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Email address:",
    },
    {
      type: "input",
      name: "school",
      message: "School:",
    },
  ])
  .then(answers => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    team.push(intern);
    promptTeam();
  });
}

// Function to generate HTML file based on team member objects
function generateHTML() {
  const distDir = path.resolve(__dirname, "dist");
  const mainTemplatePath = path.join(distDir, "index.html");

  fs.readFile(mainTemplatePath, "utf8", (err, data) => {
    if (err) throw err;
    const mainTemplate = data;

    const cardsHtml = team.map(member => {
      let extra = "";
      if (member.getRole() === "Manager") {
        extra = `Office Number: ${member.getOfficeNumber()}`;
      } else if (member.getRole() === "Engineer") {
        extra = `GitHub: <a href="https://github.com/${member.getGithub()}" target="_blank">${member.getGithub()}</a>`;
      } else if (member.getRole() === "Intern") {
        extra = `School: ${member.getSchool()}`;
      }
      return `
        <div class="card">
          <div class="card-header">
            <h2>${member.getName()}</h2>
            <h3>${member.getRole()}</h3>
          </div>
          <div class="card-body">
            <p>ID: ${member.getId()}</p>
            <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
            <p>${extra}</p>
          </div>
        </div>
      `;
    });

    const output = mainTemplate.replace("{{ cards }}", cardsHtml.join(""));

    fs.writeFile(path.join(__dirname, "dist", "index.html"), output, err => {
      if (err) throw err;
      console.log("The team profile has been generated!");
    });
  });
}


// Helper function to replace placeholders in templates
function replacePlaceholders(template, placeholder, value) {
  const pattern = new RegExp(`{{ ${placeholder} }}`, "gm");
  return template.replace(pattern, value);
}

// Call promptManager
promptManager();
