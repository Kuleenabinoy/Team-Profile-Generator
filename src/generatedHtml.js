const generateManager = (managerCard) => {
    console.log("managerdata");
    console.log(managerCard);
};
const generateEngineer = (engineerCard) => {
    console.log("enginnerdata");
};

const generateIntern = (internCard) => {
    console.log("interndata");
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
            //   employeeArray.push(managerCard);
        }
        if (role === "Engineer") {
            const engineerCard = generateEngineer(employee);
            // employeeArray.push(engineerCard);
        }
        if (role === "Intern") {
            const interncard = generateIntern(employee);
            // employeeArray.push(interncard);
        }
    }
};

module.exports = generateHtml;
