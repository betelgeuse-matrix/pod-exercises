"use strict";

// FIRST EXERCISE FOR POD

// Make a function called randomIntBetween(min, max) that returns a random number between the min and the max.

// Make a function called coinFlip() that returns either 0 or 1, randomly

// Make a function called twoDice() that returns the sum of rolling two six sided dice.

// Make a function called twentySidedDie() that returns a random integer between 1 and 20.

// Make a function called twelveSidedDie() that returns a random integer between 1 and 12.

// Make a function called tetrahedron() that returns a random integer between 1 and 4.

// Make a function called rollDie() that returns an integer between 1 and 6.

// Make a function called listOfRolls(num) that takes in a number containing how many 6-sided dice rolls you want to make. The listOfRolls function should return an array of that length, where each element of the array is the result of the rollDie function.


// Make a function called listOfRollsFromDieFunc(numberOfRolls, diceFunction)
// This function should take in two arguments:
// The first argument is the number of rolls you want to make.
// The second argument is a function that contains the function definition for the type of die you want to roll.
// For example, if we call listOfDieRollsFromDieFunc(1, tetrahedron), then the function will return an array containing one value that is the result of calling the tetrahedron function.



function randomIntBetween(min, max) {
    return Math.floor((Math.random()* max)+min);
}

function coinFlip() {
    return Math.round(Math.random());
}

function rollDie() {
    return Math.floor((Math.random()*6)+1);
}

function twoDice() {
    return rollDie()+rollDie();
}

function twentySidedDie() {
    return Math.floor((Math.random()*20)+1);
}

function twelveSidedDie() {
    return Math.floor((Math.random()*12)+1);
}

function tetrahedron() {
    return Math.floor((Math.random()*4)+1);
}

function listOfRolls(num) {
    var array = [];
    while (array.length < num) {
        array.push(rollDie());
    }
    return array;
}

function listOfRollsFromDieFunc(numberOfRolls, diceFunction) {
    var array = [];
    while (array.length < numberOfRolls) {
        array.push(diceFunction);
    }
    return array;
}


// SECOND EXERCISE FOR POD

// Create a dog object
//
// The dog object should have properties for:
//
//     breed (string),
//     weightInPounds (number),
//     age (number),
//     color (string),
//     sterilized (boolean),
//     shotRecords (array of objects with properties for date and typeOfShot)
// The dog object should have methods too:
//
// bark() - will console.log "Woof!"
// getOlder() - will increase age by 1
// fix() - will set sterile to true if dog sterilized property is false
// vaccinate() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array

var dog = {
    breed: 'string',
    weightInPounds: 5, //a number
    age: 5, // a number
    color: 'string',
    sterilized: true, //a boolean
    shotRecords: [{
        date: 'string',
        typeOfShot: 'string'
    }]
};

dog.bark = function () {
    console.log('Woof!');
};

dog.getOlder = function () {
    return this.age + 1;
};

dog.fix = function () {
    if (this.sterilized === false) {
        return this.sterilized === true;
    }
};
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

dog.vaccinate = function (nameOfShot) {
    return (this.shotRecords[1] === nameOfShot) + (this.shotRecords[0] === date);
};

// THIRD EXERCISE FOR POD, TAKEN FROM CODEWARS
// Description:
//     It's a Pokemon battle! Your task is to calculate the damage that a particular move would do using the following formula (not the actual one from the game):
//
// damage = 50 * (attack/defense) * effectiveness
// Make sure to round the result up to the nearest integer.
//
//     attack = your attack power
// defense = the opponent's defense
// effectiveness = the effectiveness of the attack based on the matchup (see explanation below)
// Effectiveness:
//
//     Attacks can be super effective, neutral, or not very effective depending on the matchup. For example, water would be super effective against fire, but not very effective against grass.
//
//     Super effective: 2x damage
// Neutral: 1x damage
// Not very effective: 0.5x damage
// To prevent this kata from being tedious, you'll only be dealing with four types: fire, water, grass, and electric. Here is the effectiveness of each matchup:
//
// fire > grass
// fire < water
// fire = electric
//
// water < grass
// water < electric
//
// grass = electric
//
// For this kata, any type against itself is not very effective. Also, assume that the relationships between different types are symmetric (if a is super effective against b, then b is not very effective against a).
//
// The function you will create is called calculateDamage, and it takes in your type and the opponent's type as strings and the attack and defense as numbers.

function calculateDamage(yourType, opponentType, attack, defense){
        if (yourType === 'fire' && opponentType === 'grass') {
            var effectiveness = 2;
        } else if (yourType === 'fire' && opponentType === 'water')  {
            effectiveness = .5;
        } else if (yourType === 'fire' && opponentType === 'electric') {
            effectiveness = 1;
        } else if (yourType === opponentType) {
            effectiveness = .5;
        } else if (yourType === 'water' && opponentType === 'grass') {
            effectiveness = .5;
        } else if (yourType === 'water' && opponentType === 'electric') {
            effectiveness = .5;
        } else if (yourType === 'water' && opponentType === 'fire') {
            effectiveness = 2;
        } else if (yourType === 'grass' && opponentType === 'electric') {
            effectiveness = 1;
        } else if (yourType === 'grass' && opponentType === 'water') {
            effectiveness = 2;
        } else if (yourType === 'grass' && opponentType === 'fire') {
            effectiveness = .5;
        } else if (yourType === 'electric' && opponentType === 'fire') {
            effectiveness = 1;
        } else if (yourType === 'electric' && opponentType === 'water') {
            effectiveness = 2;
        } else if (yourType === 'electric' && opponentType === 'grass') {
            effectiveness = 1;
        }
    return Math.ceil(50 * (attack/defense) * effectiveness);
}

//I knew there had to be an easier way to do this and I understand it now that I've seen other solutions, posting one below this comment. I should have thought with objects more than I actually did, it would have made this problem much more simple, but a loop was the only way I could think of for some reason.x

var effects = {
    fire : {
        fire : 0.5,
        grass : 2,
        water : 0.5,
        electric : 1
    },
    grass : {
        fire : 0.5,
        grass : 0.5,
        water : 2,
        electric : 1
    },
    water : {
        fire : 2,
        grass : 0.5,
        water : 0.5,
        electric : 0.5
    },
    electric : {
        fire : 1,
        grass : 1,
        water : 2,
        electric : 0.5
    }
};

function calculateDamage(yourType, opponentType, attack, defense){
    return Math.ceil(50 * (attack/defense) * effects[yourType][opponentType]);
}

// Task from Codewars

// Given a string str, reverse it omitting all non-alphabetic characters.

//     Example
// For str = "krishan", the output should be "nahsirk".

//     For str = "ultr53o?n", the output should be "nortlu".

//     Input/Output
//     [input] string str

// A string consists of lowercase latin letters, digits and symbols.

//     [output] a string

function reverseLetter(str) {
    var replace = str.replace(/[^a-zA-Z ]/g, "");
    var split = replace.split("");
    var filter = split.filter(isNaN);
    var reverse = filter.reverse();
    var join = reverse.join("");
    return join;
}
reverseLetter("kri?234shan");

// Task from Codewars
// A boy is walking a long way from school to his home. To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately, not all of the houses have numbers written on them, and on top of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.

// At some point during the walk the boy encounters a house with number 0 written on it, which surprises him so much that he stops adding numbers to his total right after seeing that house.

//     For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there will always be at least one 0 house on the path.

//     Example
// For inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2], the output should be 11.

// The answer was obtained as 5 + 1 + 2 + 3 = 11.

// Input/Output
//     [input] integer array inputArray

// Constraints: 5 ≤ inputArray.length ≤ 50, 0 ≤ inputArray[i] ≤ 10.

//     [output] an integer

function houseNumbersSum(inputArray) {
    var array = [];
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === 0) {
            array.push(inputArray[i]); //this is needed in case an array starts with zero, if it's gone then reduce() won't work on an empty array.
            break;
        } else {
            array.push(inputArray[i]);
        }
    }
    function add(total, num) {
        return total + num;
    }
    var num = array.reduce(add);
    console.log(num)
}
houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]);

