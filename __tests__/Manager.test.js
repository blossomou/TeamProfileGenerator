const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

describe("GetRoleName", () => {
  test("it should return Manager", () => {
    // actual test
    const manager = new Manager();
    expect(manager.getRole()).toBe("Manager");
  });
});
