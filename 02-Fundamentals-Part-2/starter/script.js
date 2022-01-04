// 🔥🔥/*** Strict Mode ***/🔥🔥

// the string 'use strict' must be at the very beginning of the script file.
// imposes some handy rules such as not allowing you to accidentally create a new variable that is very close in wording to a variable you meant to reference
'use strict';

// 🔥🔥/*** Functions ***/🔥🔥

// building a function
function logger() {
    console.log('My name is Jonas');
}

// invoking, calling or running the function
logger();

// function that takes in data and performs some action with that data

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

// this will only output the numbers 2 and 3 to the console because of the 'console.log(apples, oranges)' line in the function body. it does not return the template literal because it's being stored in the variable 'juice' and we need to call that variable more directly
fruitProcessor(2, 3);

// these two methods will output the template literal
// doing a console.log() with the function inside the parameter for the log is using the returned 'juice' variable
// creating a variable with the value of the function assigned will assign the returned 'juice' value to the variable

console.log(fruitProcessor(3, 2));
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// 🔥🔥/*** Function Declarations vs. Function Expressions ***/🔥🔥

// functions from last lecture are function declarations. another example of function declaration

function calcAge1(birthYear) {
    return 2021 - birthYear;
}

const age1 = calcAge1(1992);

// function expressions are functions that are made without a name and can be used as the value when assigned a variable a value. 

const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

const age2 = calcAge2(1990); // calcAge2 is a variable but needs to be given the parameter for the function that is assigned to that variable

console.log(age1, age2);

// NOTE: Function declarations can be used before the function is declared in the code. For example, the below would work because when the tirePressure variable is being assigned, the compiler sees the reference to the function and goes to find that function

const tirePressure = pressureCalc(40, 30);

function pressureCalc(tireSize, wheelSize) {
    return tireSize * wheelSize; // this isn't how you calculate PSI in a tire but just for example sake
}

// NOTE: Function expression CAN NOT be used before they are declared in the code. The following code would not work because when the compiler looked for 'goodYearCalc', it will not be able to find that variable being initialized yet:
/*
const goodYearTirePressure = goodYearCalc(40, 30);

const goodYearCalc = function (tireSize, wheelSize) {
    return tireSize * wheelSize;
}
*/

// 🔥🔥/*** Arrow Functions ***/🔥🔥

// arrow functions are like a short hand way of writing a function expression

// example: birthYear => 2037 - birthYear

// that above is the same as 
/*
function (birthYear) {
    return 2037 - birthYear;
}
*/

const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1989);
console.log(age3);

// more complex arrow function with more happening in the body

const yearsUntilRetirement = (birthYear, firstName) => {
    const currentAge = 2021 - birthYear;
    const retirement = 65 - currentAge;
    return retirement;
}

// arrow functions are great for one-liner calculation but there are limitations and can't be used in ALL scenarios or may not be best for ALL scenarios

// 🔥🔥/*** Functions calling other Functions***/🔥🔥

// Functions can often call other functions within the body of a function. For example, if I use the foodProcessor function from the Fundamentals Part 1 section, I could add a different function called foodSlicer that would create pieces of the fruit being used in the processor. In the example below, our foodSlicer function takes a fruit and then multiplies it by 4 (the number of slice it makes of the fruit)

function foodSlicer (fruit) {
    return fruit * 4
}

function foodProcessor (apples, oranges) {
    const applePieces = foodSlicer(apples);
    const orangePieces = foodSlicer(oranges);
    
    const juice = `We made a juice with ${applePieces} pieces of apple and ${orangePieces} of orange!`
    return juice;
}

console.log(foodProcessor(4,3));

// 🔥🔥/*** Reviewing Functions ***/🔥🔥

// the 'return' operator immediately exits the function. so if you have code after the return function, it will not execute. this is true also in the case of return statements inside of if/else statements

// 🔥🔥/*** Arrays ***/🔥🔥

const friends = [`Michael`, `Steven`, `Peter`];

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0])


