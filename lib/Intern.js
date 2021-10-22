// In addition to `Employee`'s properties and methods, `Intern` will also have the following:

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`
const Employee = require("./Employee");
class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}
module.exports = Intern;
