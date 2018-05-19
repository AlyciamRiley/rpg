//Global Variables

var characters = {
    "Dracula": {
        name: "Dracula",
        hp: 145,
        attack: 10,
        imageUrl: "assets/images/dracula.png",
        enemyAttackBack: 15
    },

    "Frankenstein": {
        name: "Frankenstein",
        hp: 255,
        attack: 3,
        imageUrl: "assets/images/frank.png",
        enemyAttackBack: 25
    },

    "Zombie": {
        name: "Zombie",
        hp: 100,
        attack: 12,
        imageUrl: "assets/images/zombie.png",
        enemyAttackBack: 12
    },

    "Werewolf": {
        name: "Werewolf",
        hp: 200,
        attack: 18,
        imageUrl: "assets/images/werewolf.png",
        enemyAttackBack: 3
    },




}

var allCharacters = [];
var yourCharacter;
var availableEnemies= [];
var chosenDefender;
var defeatedOpponents= [];
var availableHP = [];
var remainingHP = [];




//App loads and displays 4 characters 

//Player chooses character by clicking fighters picture

function choosePlayer () {
    $("")
}


//That fighter moves to "your character" div #yours

//All other characters move to #enemies div

//Player chooses a opponent. Opponent moves to #defender div

//Player can click attack btton #attack.  

//When player clicks attack button, their character damages defender.  

//Opponent loses health points.  Points are displayed at bottom of defenders picture 

//Opponent counters attack - players character loses HP.  Points show up at bottom of characters picture.

//When opponent's HP gets to 0, opponent disappears (hide feature?)

//Player chooses new opponent, steps repeat

//If character defeats all enemies, user wins.

//if character reaches 0 HP, user loses. 

