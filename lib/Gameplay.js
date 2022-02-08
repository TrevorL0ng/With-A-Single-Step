//GAMEPLAY JS FILE
var battleButton = document.querySelector('#battle');
var saloonButton = document.querySelector('#saloon');
var tradingPostButton = document.querySelector('#tradingPost');
var quitButton = document.querySelector('#quit');

//RANDOM NUMBER CODE
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max -min + 1) + min);
    return value;
}


//CODE TO HANDLE EVENT LISTENERS
battleButton.addEventListener('click', battle) //I NEED HELP GETTING THESE TO CONSOLE.LOG THE DETAILS FROM THE BELOW FUNCTIONS
saloonButton.addEventListener('click', saloon) //ONCE THESE WORK, I WILL BUILD THE BATTLE LOGIC
tradingPostButton.addEventListener('click', tradingPost)
quitButton.addEventListener('click', quit)


//GET HERO NAME
function getHeroName() {
    var name='';
    while (name ==='' || name === null) {
        name = prompt('What is your name?');
    }
    console.log('Huzzah ' + name + '!');
    return name;
}


//HERO INFO
var heroDetails = {
    name: getHeroName(),
    health: 100,
    attack: 15,
    money: 10,
}


//FOE INFO
var foeDetails = [
    {
        name: "George the Gross",
        attack: randomNumber(10,15),
        health: randomNumber(50, 70)
    },
    {
        name: "Sylvia the Sly",
        attack: randomNumber(15, 20),
        health: randomNumber(70, 90)
    },
    {
        name: "Carl the Cursed",
        attack: randomNumber(10, 20),
        health: randomNumber(90,110)
    }
]


//DECISIONAL LOGIC ON NEXT STEP
function nextSteps () {
}


//BATTLE FUNCTION
function battle () {
    console.log('you chose to battle')
    //nextSteps();
}


//FUNCTION TO GO TO SALOON AND FUEL UP
function saloon() {
    console.log('You chose to visit the saloon');
    nextSteps();
}


//FUNCTION TO GO TO STORE AND BUY MATERIALS
function tradingPost () {
    console.log('You chose to visit the trading post');
    nextSteps();
}


//QUIT GAME FUNCTION
function quit() {
    window.alert("Thank you for playing. Come back soon!");
}



//nextSteps();