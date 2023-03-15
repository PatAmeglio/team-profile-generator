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
          <p>${manager.id}</p>
          <p>${manager.email}</p>
          <p>${manager.officeNumber}</p>
        </div>
        <div class="card-action">
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
          <p>${engineer.id}</p>
          <p>${engineer.email}</p>
          <p>${engineer.github}</p>
        </div>
        <div class="card-action">
        </div>
      </div>
    </div>
  </div>`
}

const createinternCard = (intern) => {
    return `<div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${intern.name}</span>
          <p>${intern.id}</p>
          <p>${intern.email}</p>
          <p>${intern.school}</p>
        </div>
        <div class="card-action">
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
    } if (teamMember.getRole() === "Inter") {
        return createinternCard(teamMember);
    }
}

const generatePage = (team)=> {
    fs.writeFileSync(path.join(process.cwd(), "dist", "index.html"), createHTML(team))
}
 module.exports = generatePage