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
        name: "id",
        message: "Please enter manager ID",
    },

    {
        type: "input",
        name: "name",
        message: "Enter  the name of  manager of the team ?",
    },

    {
        type: "input",
        name: "email",
        message: "Enter Managers Email",
        validate: function (email) {
            // mail check (return true if valid mail)
            valid =
                /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
                    email
                );
            if (valid) {
                return true;
            } else {
                console.log("\n E-mail address  you entered is wrong.\n");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "officenumber",
        message: "Enter Manager office number",
    },
];

const engineerQuestions = [
    {
        type: "number",
        name: "id",
        message: "Enter engineer id",
    },

    {
        type: "input",
        name: "name",
        message: "Enter the name of engineer",
    },

    {
        type: "input",
        name: "email",
        message: "Enter engineer email address",
        validate: function (email) {
            // mail check (return true if valid mail)
            valid =
                /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
                    email
                );
            if (valid) {
                return true;
            } else {
                console.log("\n E-mail address  you entered is wrong.\n");
                return false;
            }
        },
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
        name: "id",
        message: "Enter intern ID",
    },
    {
        type: "name",
        name: "name",
        message: "Enter intern Name",
    },
    {
        type: "input",
        name: "email",
        message: "Enter intern email address",
        validate: function (email) {
            // mail check (return true if valid mail)
            valid =
                /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
                    email
                );
            if (valid) {
                return true;
            } else {
                console.log("\n E-mail address  you entered is wrong.\n");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "school",
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
        // console.log(teamArray);
        nextEmployee();
    });
};
const engineerPromt = () => {
    inquirer.prompt(engineerQuestions).then((response) => {
        const { name, id, email, github } = response;
        const engineer = new Engineer(id, name, email, github);
        teamArray.push(engineer);
        //  console.log(teamArray);
        nextEmployee();
    });
};
const internPromt = () => {
    inquirer.prompt(internQuestions).then((response) => {
        const { name, id, email, school } = response;
        const intern = new Intern(id, name, email, school);
        teamArray.push(intern);
        //  console.log(teamArray);
        nextEmployee();
    });
};
const makeTeam = () => {
    console.log("team done");
    // console.log(teamArray);
    const htmlPageContent = generateHtml(teamArray);
    // console.log(htmlPageContent);
    fs.writeFile("./dist/index.html", htmlPageContent, (err) =>
        err ? console.log(err) : console.log("Successfully created index.html!")
    );
};
function init() {
    managerPromt();
}
init();
