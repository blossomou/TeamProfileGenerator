const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");

const render = require("./src/page-template");

const teamMembers = [];
const arrayIds = [];

function createManager() {
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
    .then((res) => {
      const manager = new Manager(
        res.name,
        res.id,
        res.email,
        res.officeNumber
      );

      teamMembers.push(manager);

      arrayIds.push(res.id);
      createMember();
    });
}

function createMember() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Which team members would you like to add?",
        choices: ["engineer", "intern", "done adding"],
      },
    ])
    .then((choice) => {
      switch (choice.memberChoice) {
        case "engineer":
          createEngineer();
          break;
        case "intern":
          createIntern();
          break;
        default:
          buildTheTeam();
      }
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's github username?",
      },
    ])
    .then((res) => {
      const engineer = new Engineer(res.name, res.id, res.email, res.github);
      teamMembers.push(engineer);

      arrayIds.push(res.id);
      createMember();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "school",
        message: "Where is your intern's school?",
      },
    ])
    .then((res) => {
      const intern = new Intern(res.name, res.id, res.email, res.school);
      teamMembers.push(intern);

      arrayIds.push(res.id);
      createMember();
    });
}

function buildTheTeam() {
  fs.writeFile("dist/team.html", render(teamMembers), (err) => {
    if (err) {
      console.log("err", err);
    }
  });
}

createManager();
