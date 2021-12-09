/* 
This is a script for practicing the lecture assignments.
Just making a multi-line comment for knowing the multi-line symbol for later.
*/


//Assignment from Values and Variables Lecture
const country = "United States";
const continent = "North America";
let population = 300
console.log("Country:",country,"Continent:",continent,"Population:",population);

//Assignment from Data Types Lecture
const isIsland = false;
let language;

console.log("isIsland is type:", typeof isIsland);
console.log("population is type:", typeof population);
console.log("country is type:", typeof country);
console.log("language is type:", typeof language);

//Assignment from Let, Const and Var Lecture
language = 'English';

//Assignment from Basic Operators Lecture
let halfPopulation = (population / 2);
population++;
console.log(population);
let finlandPopulation = 6000000;
const isFinlandBigger = (population < finlandPopulation);
let averageCountryPopulation = 3000000
const isBiggerThanAveragePop = (population > averageCountryPopulation);
const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description);