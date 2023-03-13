// Require necessary modules
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

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
  const templatesDir = path.resolve(__dirname, "templates");
  const mainTemplatePath = path.join(templatesDir, "main.html");
  
  // Your code to generate the HTML file goes here
}

// Call promptManager
