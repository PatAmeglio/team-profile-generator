// creates Manager card
const createManager = function (manager) {
    return `
<div class="col s-4 mt-4">
    <div class="card small h-100">
        <div class="card-header">
            <h3>${manager.name}</h3>
            <h4>Manager</h4><i class="material-icons">star</i>
        </div>
        <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
</div>
`;
}

// creates Engineer card
const createEngineer = function (engineer) {
    return `
<div class="col s-4 mt-4">
    <div class="card small h-100">
        <div class="card-header">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4><i class="material-icons">settings</i>
        </div>
        <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
</div>
`;
}

// creates Intern card 
const createIntern = function (intern) {
    return `
<div class="col s-4 mt-4">
    <div class="card small h-100">
        <div class="card-header">
            <h3>${intern.name}</h3>
            <h4>Intern</h4><i class="material-icons">school</i>
        </div>
        <div class="card-body">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
        </div>
    </div>
</div>
`;
}

// Creates employee cards to be generated into HTML
pageHTML = (data) => {

    employeesArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        // Pushes Manager data into array
        if (role === 'Manager') {
            const managerCard = createManager(employee);
            employeesArray.push(managerCard);
        }

        // Pushes Engineer data into array
        if (role === 'Engineer') {
            const engineerCard = createEngineer(employee);
            employeesArray.push(engineerCard);
        }

        // Pushes Intern data into array
        if (role === 'Intern') {
            const internCard = createIntern(employee);
            employeesArray.push(internCard);
        }        
    }

    const employeeCards = employeesArray.join('')
    const generateTeam = createTeamPage(employeeCards); 
    return generateTeam;

}

// Creates HTML page with employee data
const createTeamPage = function (employeeCards) {   
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    </head>
    <body>
        <main class="container">
    
            <div class="row">
                <div class="col s12 m6">
                  <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                      <span class="card-title">Team Members</span>
                      ${employeeCards}
                    </div>
                    <div class="card-action">
                    </div>
                  </div>
                </div>
              </div>
        </main>
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
    </html>
  `;
  }  


module.exports = pageHTML;