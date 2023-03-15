const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("getOfficeNumber", () => {
    it("should return the manager's office number", () => {
      const testOfficeNumber = 1234;
      const manager = new Manager("John", 1, "john@example.com", testOfficeNumber);
      expect(manager.getOfficeNumber()).toBe(testOfficeNumber);
    });
  });

  describe("getRole", () => {
    it("should return 'Manager'", () => {
      const testRole = "Manager";
      const manager = new Manager("John", 1, "john@example.com", 1234);
      expect(manager.getRole()).toBe(testRole);
    });
  });
});
