const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe("GetRoleName", () => {
  test("it should return Engineer", () => {
    // actual test
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe("Engineer");
  });
});
