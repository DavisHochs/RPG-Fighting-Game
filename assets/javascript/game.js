//Setting up the game states and global variables
isFighting = false;
hasWon = false;
isDefeated = false;

//Creating the characters
const kirby = { 
    name: "Kirby",
    health: 100,
    baseAttack: 6
}
const link = { 
    name: "Link",
    health: 125,
    baseAttack: 8
}
const cptFalcon = { 
    name: "Captain Falcon",
    health: 150,
    baseAttack: 10
}
const donkeyKong = {
    name: "Donkey Kong",
    health: 200,
    baseAttack: 12
}

const kirbyThing = $('#kirby').data("kirby", { name: "Kirby", health: 100, baseAttack: 6});
const linkThing = $('#link').data("link", { name: "Link", health: 125, baseAttack: 8});

$("#kirby").click(function() {
    $("#fight-position-1").prepend(kirbyThing);
    // $("#kirby").fadeOut( "slow", function() {});
});

$("#link").click(function() {
    $("#fight-position-2").prepend(linkThing);
    // $("#kirby").fadeOut( "slow", function() {});
});

console.log(kirby);


function getRandomNumber(n) {
    Math.floor(Math.random() * n);
    return n;
}


function pickFighterOne() {
    
}
function pickFighterTwo() {

}
