const Employee = require("../lib/Employee");

describe(" Employee", () => {
    it("Create an employee object", () => {
        const employee = new Employee();
        expect(typeof employee).toBe("object");
    });
    it("Create an instance of employee object", () => {
        const employee = new Employee(4525, "Anna", "anna123@gmail.com");
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.email).toEqual(expect.any(String));
    });

    it("Get employee ID", () => {
        const employee = new Employee(4525, "Anna", "anna123@gmail.com");
        expect(employee.getId()).toEqual(expect.any(Number));
    });

    it("Get employee name", () => {
        const employee = new Employee(4525, "Anna", "anna123@gmail.com");
        expect(employee.getName()).toEqual(expect.any(String));
    });
    it("Get employee email", () => {
        const employee = new Employee(4525, "Anna", "anna123@gmail.com");
        expect(employee.getEmail()).toEqual(expect.any(String));
    });
    it("Get employee role", () => {
        const employee = new Employee(4525, "Anna", "anna123@gmail.com");
        expect(employee.getRole()).toEqual("Employee");
    });
});
