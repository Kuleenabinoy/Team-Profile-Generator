const Manager = require("../lib/Manager");
describe("Manager", () => {
    it("Create an instance of Manager object", () => {
        const manager = new Manager(4526, "anna", "anna123@gmail.com", 1234);
        expect(manager.officenumber).toEqual(expect.any(Number));
    });
    it("Get Manager Role", () => {
        const manager = new Manager(4526, "anna", "anna123@gmail.com", 1234);
        expect(manager.getRole()).toEqual("Manager");
    });
});
