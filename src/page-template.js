const html = [];
function generateMemberCards(data) {
  function generateManagerCard(manager) {
    return `
      <div class="cardBorder">
        <div class="cardHeader">
          <label class="bigFont">${manager.name}</label>
          <label class="medFont">${manager.getRole()}</label>
        </div>
        <div class="cardBody">
          <p>ID: ${manager.id}</p>
          <div class="divider"></div>
          <p>Email: ${manager.email}</p>
          <div class="divider"></div>
          <p>Office Number:${manager.officeNumber}</p>
        </div>
      </div>
  `;
  }

  function generateEngineerCard(engineer) {
    return `
    <div class="cardBorder">
        <div class="cardHeader">
          <label class="bigFont">${engineer.name}</label>
          <label class="medFont">${engineer.getRole()}</label>
        </div>
        <div class="cardBody">
          <p>ID: ${engineer.id}</p>
          <div class="divider"></div>
          <p>Email: ${engineer.email}</p>
          <div class="divider"></div>
          <p>Github: ${engineer.github}</p>
        </div>
      </div>

  `;
  }

  function generateInternCard(intern) {
    return `
    <div class="cardBorder">
        <div class="cardHeader">
          <label class="bigFont">${intern.name}</label>
          <label class="medFont">${intern.getRole()}</label>
        </div>
        <div class="cardBody">
          <p>ID: ${intern.id}</p>
          <div class="divider"></div>
          <p>Email: ${intern.email}</p>
          <div class="divider"></div>
          <p>School: ${intern.school}</p>
        </div>
      </div>

  `;
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i].constructor.name === "Manager") {
      html.push(generateManagerCard(data[i]));
    } else if (data[i].constructor.name === "Engineer") {
      html.push(generateEngineerCard(data[i]));
    } else {
      html.push(generateInternCard(data[i]));
    }
  }
  return html.join("");
}

function generateTeamPage(data) {
  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="./styles.css" />
        </head>
      <body>
        <div class="heroTitle">
          <label>My Team</label>
        </div>
      
        <div class="mainContainer">
            ${generateMemberCards(data)}

        </div>
  
    </body>
    </html>

  `;
}

module.exports = generateTeamPage;
