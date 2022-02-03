const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

describe("GetRoleName", () => {
  test("it should return Intern", () => {
    // actual test
    const intern = new Intern();

    expect(intern.getRole()).toBe("Intern");
  });
});
