
console.log('/// BEGINNING OF ASSIGNMENTS ///');
/* 
LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters: 
'country', 'population' and 'capitalCity'. Based on this input, the 
function returns a string with this format: 'Finland has 6 million people and its 
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the 
returned values in 3 different variables, and log them to the console
*/

function describeCountry (country, population, capitalCity) {
    outputString = `${country} has ${population} million people and its capital city is ${capitalCity}.`
    return outputString
};

console.log(describeCountry('United States', 300, 'Washington DC'));
console.log(describeCountry('Finland', 6, 'Helsinki'));
console.log(describeCountry('France', 30, 'Paris'));



/* 
LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population 
represents. For example, China has 1441 million people, so it's about 18.2% of 
the world population
2. To calculate the percentage, divide the given 'population' value by 7900 
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called 
'percentageOfWorld2', and also call it with 3 country populations (can be 
the same populations)
*/

function percentageOfWorld1 (population) {
    percent = (population / 7900) * 100;
    return percent;
};

const percentageOfWorld2 = function (population) {
    percent = (population / 7900) * 100;
    return percent;
};

const unitedStatesPercent = percentageOfWorld1(300);
const francePercent = percentageOfWorld1(40);
const indiaPercent = percentageOfWorld1(1378);

console.log(unitedStatesPercent);
console.log(francePercent);
console.log(indiaPercent);

console.log(percentageOfWorld2(60));

/* 
LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called 
'percentageOfWorld3'
*/

const percentageOfWorld3 = population => (population / 7900) * 100

console.log(percentageOfWorld3(300))

/* 
LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you 
like the most. This function takes in two arguments: 'country' and 
'population', and returns a string like this: 'China has 1441 million people, 
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the 
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
*/

function describePopulation (country, population) {
    outputString = `${country} has ${population} million people, which is about ${percentageOfWorld3(population)} percent of the world.`;
    return outputString;
};

console.log(describePopulation('United States', 300));
console.log(describePopulation('France', 40));
console.log(describePopulation('India', 1378));

/*
LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice. 
You may use the values you have been using previously. Store this array into a 
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the 
world population for these 4 population values. Use the function 
'percentageOfWorld1' that you created earlier to compute the 4 
percentage values
*/

const populations = [300, 40, 1378, 1441];

console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]), 
    percentageOfWorld1(populations[1]), 
    percentageOfWorld1(populations[2]), 
    percentageOfWorld1(populations[3])
];


