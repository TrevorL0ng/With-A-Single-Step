//GAMEPLAY JS FILE
const inquirer = require('inquirer')

//RANDOM NUMBER CODE
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max -min + 1) + min);
    return value;
}

//DECISIONAL LOGIC ON NEXT STEP
function nextSteps () {
    return inquirer.prompt([
        {
            name: 'whatNext',
            type: 'list',
            message: 'What would you like to do?',
            choices: ['Find a battle', 'Go to Trading Post', 'Go to Saloon', 'Quit']
        }
    ]).then((answers) => {
        if (answers === 'Find a battle') {
            battle();
        } else if (answers === 'Go to Trading Post') {
            tradingPost();
        } else if (answers === 'Go to Saloon') {
            saloon();
        } else if (answers === 'Quit') {
            quit();
        }
    })
}


//BATTLE FUNCTION
function battle () {
    console.log('you chose to battle')
    nextSteps();
}

//FUNCTION TO GO TO SALOON AND FUEL UP
function saloon() {
    console.log('You chose to visit the saloon')
    nextSteps();
}

//FUNCTION TO GO TO STORE AND BUY MATERIALS
function tradingPost () {
    console.log('You chose to visit the trading post')
    nextSteps();
}

//QUIT GAME FUNCTION
function quit() {
    window.alert("Thank you for playing. Come back soon!");
}

nextSteps();