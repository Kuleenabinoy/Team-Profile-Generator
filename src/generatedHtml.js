const generateManager = (manager) => {
    return `
     <div class="col-4 mt-4">
        <div class="card  ">
   <div class="card-header">
    
    <h3>${manager.name}</h3>
    <h4>Manager<img class="employeeImage" src="./images/manager.png" alt="managericon"></h4>
    
     </div>
        <div class="card-body">
        <p class="id">ID:${manager.id}</p>
        <p class="email">Email:<a href="mailto:${manager.email}">${manager.email}</a></p>
        <p class="office">Office Number:${manager.officenumber}</p>
    </div>
</div>
</div>
`;
};
const generateEngineer = (engineer) => {
    return `
 
  <div class="col-4 mt-4">
 <div class="card >
    <div class="card-header">
    <h3>${engineer.name}</h3>
    <h4>Engineer<img class="employeeImage" src="./images/software-engineer.png" alt="engicon"></h4>
    </div>
        <div class="card-body">
        <p class="id">ID:${engineer.id}</p>
        <p class="email">Email:<a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class="github">GitHub:<a href="https://github.com/${engineer.github}">${engineer.github}</p>
    </div>
</div>
</div>
`;
};

const generateIntern = (intern) => {
    //console.log("interndata");
    return `
    <div class="col-4 mt-4">
        <div class="card ">
        <div class="card-header" >
        <h3>${intern.name}</h3>
        <h4>Intern<img class="employeeImage" src="./images/intern.png" alt="internicon"></h4>
        </div>
            <div class="card-body">
            <p class="id">ID:${intern.id}</p>
            <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school">School:${intern.school}</p>
        </div>
    </div>
    </div>
    `;
};
const generateHtml = (teamArray) => {
    //  console.log("sucess try");
    //  console.log(teamArray);
    //  console.log(teamArray.length);

    employeeArray = [];
    for (let i = 0; i < teamArray.length; i++) {
        const employee = teamArray[i];
        const role = employee.getRole();

        if (role === "Manager") {
            const managerCard = generateManager(employee);
            //   console.log(managerCard, "Manager details");
            employeeArray.push(managerCard);
        }
        if (role === "Engineer") {
            const engineerCard = generateEngineer(employee);
            employeeArray.push(engineerCard);
        }
        if (role === "Intern") {
            const interncard = generateIntern(employee);
            employeeArray.push(interncard);
        }
    }
    const employeeCards = employeeArray.join("");
    //  console.log(employeeCards, "EMPLOYEE CARDS");
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
};
const generateTeamPage = (employeeCards) => {
    return `<!DOCTYPE html>
 <html lang="en">
     <head>
         <meta charset="UTF-8" />
         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>Team-Profile</title>
         <link
             href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
             rel="stylesheet"
             integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
             crossorigin="anonymous"
         />
         <link rel="stylesheet" href="style.css" />
     </head>
     <body>
     <header>
         <nav class="navbar" id="navbar">
             <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
         </nav>
     </header>
     <main>
         <div class="container">
             <div class="row justify-content-center" id="team-cards">
                 <!--Team Cards-->
                 ${employeeCards}
             </div>
         </div>
     </main>
     
 </body></html>



 `;
};
module.exports = generateHtml;
