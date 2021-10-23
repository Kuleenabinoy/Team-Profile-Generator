const Intern = require("../lib/Intern");
describe("Intern", () => {
    it("Create an intance of Intern object", () => {
        const intern = new Intern(4526, "anna", "anna123@gmail.com", "AWS school");
        expect(intern.school).toEqual(expect.any(String));
    });
    it("Get Intern school", () => {
        const intern = new Intern(4526, "anna", "anna123@gmail.com", "AWS school");
        expect(intern.getSchool()).toBe("AWS school");
    });
    it("Get intern role", () => {
        const intern = new Intern(4526, "Anna", "anna123@gmail.com", "AWS school");
        expect(intern.getRole()).toEqual("Intern");
    });
});
