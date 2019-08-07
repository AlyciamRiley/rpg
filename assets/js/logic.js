//Global Variables
$(document).ready(function() {



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

var remainingCharacters = [];

  function renderGame(){
    var keys =  Object.entries(characters);
    for (var i = 0; i < keys.length; i++) {
      console.log(keys[i][0])
      $("#selected-character-section").prepend('<button class="character-btn" data-name="' + keys[i][0] + '">' + '<img id="character"' + 'src=' + keys[i][1].imageUrl + '>' + "</button>")
    }
  }
  renderGame();

  //on click events
    //choose player

    $(".character-btn").click( function () {
      var myCharacter = this;
      $(this).addClass("ok")

      //assign classes
      //run seperate function that moves everything

      if ($(".character-btn").hasClass("ok")) {
        $(myCharacter).appendTo("#selected-character");
      } else {
        $(".character-btn").appendTo("#defender");
      }
    
    })
});