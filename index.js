const inquirer = require("inquirer");

function buildYourTeam() {
  console.log("Please build your team");

  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the team manager's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's officeNumber?",
      },
    ])
    .then(() => {
      createYourTeam();
    });
}

function createYourTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "teamMember",
        message: "Which team members would you like to add?",
        choices: ["engineer", "intern", "none"],
      },
    ])
    .then((choice) => {
      console.log("answer ", choice);
    });
}

buildYourTeam();
