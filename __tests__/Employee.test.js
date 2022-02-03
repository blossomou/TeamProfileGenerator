const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe("GetRoleName", () => {
  test("it should return Employee", () => {
    // actual test
    const employee = new Employee();

    expect(employee.getRole()).toBe("Employee");
  });
});
