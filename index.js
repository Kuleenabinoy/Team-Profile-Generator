const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./src/generatedHtml");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamArray = [];
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter  the name of  manager of the team ?",
    },
    {
        type: "number",
        name: "id",
        message: "Please enter manager ID",
    },
    {
        type: "input",
        name: "email",
        message: "Enter Managers Email",
    },
    {
        type: "number",
        name: "officenumber",
        message: "Enter Manager office number",
    },
];

const engineerQuestions = [
    {
        type: "input",
        name: "engname",
        message: "Enter the name of engineer",
    },

    {
        type: "number",
        name: "engid",
        message: "Enter engineer id",
    },
    {
        type: "input",
        name: "engemail",
        message: "Enter engineer email address",
    },
    {
        type: "input",
        name: "github",
        message: "Enter engineer github username",
    },
];
const internQuestions = [
    {
        type: "number",
        name: "internid",
        message: "Enter intern ID",
    },
    {
        type: "name",
        name: "internname",
        message: "Enter intern Name",
    },
    {
        type: "input",
        name: "internemail",
        message: "Enter intern email address",
    },
    {
        type: "input",
        name: "internschool",
        message: "Enter intern school",
    },
];

const selectnextEmployee = [
    {
        type: "list",
        name: "nextEmployee",
        message: "Select employee role",
        choices: ["Engineer", "Intern", "Team Done"],
    },
];
const nextEmployee = () => {
    inquirer.prompt(selectnextEmployee).then((response) => {
        console.log(response);

        switch (response.nextEmployee) {
            case "Engineer":
                engineerPromt();
                break;

            case "Intern":
                internPromt();
                break;
            case "Team Done":
                makeTeam();
                break;
        }
    });
};
const managerPromt = () => {
    inquirer.prompt(managerQuestions).then((response) => {
        // console.log(response);
        const { name, id, email, officenumber } = response;
        const manager = new Manager(id, name, email, officenumber);
        teamArray.push(manager);
        console.log(teamArray);
        nextEmployee();
    });
};
const engineerPromt = () => {
    inquirer.prompt(engineerQuestions).then((response) => {
        const { engname, engid, engemail, github } = response;
        const engineer = new Engineer(engid, engname, engemail, github);
        teamArray.push(engineer);
        console.log(teamArray);
        nextEmployee();
    });
};
const internPromt = () => {
    inquirer.prompt(internQuestions).then((response) => {
        const { internname, internid, internemail, internschool } = response;
        const intern = new Intern(internid, internname, internemail, internschool);
        teamArray.push(intern);
        console.log(teamArray);
        nextEmployee();
    });
};
const makeTeam = () => {
    console.log("team done");
    // console.log(teamArray);
    const htmlPageContent = generateHtml(teamArray);

    //fs.writeFile("../dist/index.html", htmlPageContent, (err) =>
    //     err ? console.log(err) : console.log("Successfully created index.html!")
    // );
};
function init() {
    managerPromt();
}
init();
