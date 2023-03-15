const fs = require('fs');
const path = require('path');


const createHTML = (team)=> {
    return`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="../dist/style.css">
    </head>
    <body>

    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center">Team Profile</a>
    </div>
    </nav>

        <main class="container">
    
            ${team.map((teamMember)=> createCard(teamMember)).join("")}
        </main>
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
    </html>
    `
}

const createManagerCard = (manager) => {
    return `<div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${manager.name}</span>
          <p class="id">ID: ${manager.id}</p>
          <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
          <p class="office">Office Number: ${manager.officeNumber}</p>
        </div>
      </div>
    </div>
  </div>`
}

const createEngineerCard = (engineer) => {
    return `<div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${engineer.name}</span>
          <p class="id">ID: ${engineer.id}</p
          <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
          <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
      </div>
    </div>
  </div>`
}

const createInternCard = (intern) => {
    return `<div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${intern.name}</span>
          <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
        </div>
      </div>
    </div>
  </div>`
}

const createCard = (teamMember) => {
    if (teamMember.getRole() === "Manager") {
        return createManagerCard(teamMember);
    } if (teamMember.getRole() === "Engineer") {
        return createEngineerCard(teamMember);
    } if (teamMember.getRole() === "Intern") {
        return createInternCard(teamMember);
    }
}

const generatePage = (team)=> {
    fs.writeFileSync(path.join(process.cwd(), "dist", "index.html"), createHTML(team))
}
 module.exports = generatePage