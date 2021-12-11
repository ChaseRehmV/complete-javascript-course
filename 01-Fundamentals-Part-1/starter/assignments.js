/* 
This is a script for practicing the lecture assignments.
Just making a multi-line comment for knowing the multi-line symbol for later.
*/


// Assignment from Values and Variables Lecture🔥

const country = "the United States";
const continent = "North America";
let population = 40
console.log("Country:",country,"Continent:",continent,"Population:",population);

// Assignment from Data Types Lecture🔥

const isIsland = false;
let language;

console.log("isIsland is type:", typeof isIsland);
console.log("population is type:", typeof population);
console.log("country is type:", typeof country);
console.log("language is type:", typeof language);

// Assignment from Let, Const and Var Lecture🔥

language = 'mandarin';

// Assignment from Basic Operators Lecture🔥


let halfPopulation = (population / 2);
population++;
console.log(population);
let finlandPopulation = 6000000;
const isFinlandBigger = (population < finlandPopulation);
let averageCountryPopulation = 3000000
const isBiggerThanAveragePop = (population > averageCountryPopulation);
//const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
//console.log(description);

//Assignment from Strings and Template Literals🔥
/* 1. Recreate the 'description' variable from the last assignment, this time 
using the template literal syntax */

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`
console.log(description);

// Assignment from if/else statements🔥
/*
1. If your country's population is greater that 33 million, log a string like this to the 
console: 'Portugal's population is above average'. Otherwise, log a string like 
'Portugal's population is 22 million below average' (the 22 is the average of 33 
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to original
*/

if (population > 33) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(
        `${country}'s population is ${(33 - population)} million below average.`
    );
}

// Assignment from Type Conversion and Coercion🔥

/*
1. Predict the result of these 5 operations without executing them:
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;
2. Execute the operations to check if you were right
*/

// I was wrong on a few but understand where I went wrong.

// Assignment from Equality Operators🔥

let numNeighbors = Number(prompt('How many neighbor countries does your country have?'));

if (numNeighbors === 1) {
    console.log('Only 1 border!');
} else if (numNeighbors > 1) {
    console.log('More than 1 border!');
} else {
    console.log('No borders');
}

// Assignment from Logical Operators

if (population < 50 && language === 'English' && !isIsland) {
    console.log(`You should live in ${country}!`);
} else {
    console.log(`${country} does not meet your criteria.`);
}

// Assignment from Switch Statements

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('4th place');
        break;
    case 'arabic':
        console.log('5th place');
        break;
    default:
        console.log('Great language too!')
}
