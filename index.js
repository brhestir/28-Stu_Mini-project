const fs = require("fs");
const inquirer = require("inquirer");

const generateHTML = require("./utils/generateHTML");





const promptUser = () => {
    
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "userName",
        },
        {
            type: "input",
            message: "Where city do you live in?",
            name: "userLocation", 
        },
        {
            type: "input",
            message: "Tell us a bit about yourself:",
            name: "userBio", 
        },
        {
            type: "input",
            message: "Please enter your GitHub URL:",
            name: "userGitHubURL",
        },
        {
            type: "input",
            message: "Please enter your LinkedIn URL:",
            name: "userLinkedInURL",
        }
    ]).then((response) => {
        fs.writeFile("portfolio.html", generateHTML.generateHTML(response), (err) => 
            err ? console.log(err) : console.log("It worked")
        );
    });

};

// function generateHTML(response) {
//     return `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Document</title>
//         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//     </head>
//     <body>
        
//         <div class="container">
//             <h1 id="userName">${response.userName}</h1>
//             <h3 id="userLocation">Location:</h3>
//                 <p>${response.userLocation}</p>
//             <h3 id="userBio">Bio:</h3>
//                 <p>${response.userBio}</p>
//             <button class="btn btn-info"><h3 id="userLinkedIn"><a class="text-white" href='${response.userLinkedInURL}'>LinkedIn</a></h3></button>
//             <button class="btn btn-info"><h3 id="userGitHub"><a class="text-white" href='${response.userGitHubURL}'>GitHub</a></h3></button>
//         </div>
        
        
//         <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
//         <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
//         <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
//     </body>
//     </html>
//     `;
// };

const init = () => {
    promptUser();

};

init();