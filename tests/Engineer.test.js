const Engineer = require("../lib/Engineer");
describe("Engineer", () => {
    it("Create an instance of engineer object", () => {
        const engineer = new Engineer(4526, "anna", "anna123@gmail.com", "anna123");
        expect(engineer.github).toEqual(expect.any(String));
    });
    it("Get engineer github value", () => {
        // const githubvalue = "anna123";
        const engineer = new Engineer(4526, "anna", "anna123@hmail.com", "anna123");

        expect(engineer.getGithub()).toBe("anna123");
    });
    it("Get engineer role", () => {
        const engineer = new Engineer(4526, "Anna", "anna123@gmail.com", "anna123");
        expect(engineer.getRole()).toEqual("Engineer");
    });
});
