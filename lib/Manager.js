// In addition to `Employee`'s properties and methods, `Manager` will also have the following:

// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`
const Employee = require("./Employee");
class Manager extends Employee {
    constructor(id, name, email, officenumber) {
        super(id, name, email);
        this.officenumber = officenumber;
    }
    getRole() {
        return "Manager";
    }
}
module.exports = Manager;
