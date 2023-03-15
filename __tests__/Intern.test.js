const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("getSchool", () => {
    it("should return the intern's school", () => {
      const testSchool = "UCF";
      const intern = new Intern("John", 1, "john@example.com", testSchool);
      expect(intern.getSchool()).toBe(testSchool);
    });
  });

  describe("getRole", () => {
    it("should return 'Intern'", () => {
      const testRole = "Intern";
      const intern = new Intern("John", 1, "john@example.com", "UCLA");
      expect(intern.getRole()).toBe(testRole);
    });
  });
});
