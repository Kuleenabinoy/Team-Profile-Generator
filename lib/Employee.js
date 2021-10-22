// The first class is an `Employee` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`
class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}
module.exports = Employee;
