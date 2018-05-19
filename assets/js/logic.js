
// Character constructor
function Character(name, hp) {
    this.name = name;
    this.hp = hp;

}
//Global Variables
var allCharacters = [];
var yourCharacter;
var availableEnemies= [];
var chosenDefender;
var defeatedOpponents= [];
var availableHP = [];
var remainingHP = [];






//Characters
var zombie = new Character ("Zombie", 275);
var vampire = new Character ("Vampire", 412);
var werewolf= new Character ("Werewolf", 201);
var ghoul = new Character ("Ghoul", 435);

//App loads and displays 4 characters (populated from JSON file?)

//Player chooses character by clicking fighters picture


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

