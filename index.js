// Require necessary modules
const inquirer = require("inquirer");
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
  return inquirer.prompt([
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
  }).then(promptTeam);
}

// Function to prompt user for team member type and information
function promptTeam() {
   return inquirer.prompt([
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
        return promptEngineer();
      case "Intern":
        return promptIntern();
      default:
        generatePage(team);
    }
  });
}

// Function to prompt user for engineer information
function promptEngineer() {
  console.log("Please enter the following information for the engineer:");
  return inquirer.prompt([
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
  }).then(promptTeam);
}

// Function to prompt user for intern information
function promptIntern() {
  console.log("Please enter the following information for the intern:");
  return inquirer.prompt([
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
  }).then(promptTeam);
}

// Initializes App
  promptManager()
