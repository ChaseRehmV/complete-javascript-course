let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = "Jonas"
console.log(firstName)

// 🔥🔥/*** Operators ***/🔥🔥

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah)

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3


const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10; // x = x + 10
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// 🔥🔥/*** Comparison operators ***/🔥🔥

console.log(ageJonas > ageSarah); // <, >, >=, <= 
console.log(ageSarah >= 18);

// 🔥🔥/*** Strings and Template Literals ***/🔥🔥

const job = 'teacher';
const birthYear = '1991';
const year = 2037

//inefficient way of doing a long string with multiple variables
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!'
console.log(jonas)

//efficient way - template literal
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

// 🔥🔥/*** if / else statements ***/🔥🔥

const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough) {
    console.log('Sarah can start driving')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young, wait another ${yearsLeft} years.`)
}

const birthYear2 = 2002;
let century;

if(birthYear2 <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

// 🔥🔥/*** Type Conversion and Coercion ***/🔥🔥

//type conversion
const inputYear = '1991'
console.log(inputYear); //this will output the string version of the inputYear
console.log(Number(inputYear)); //this will output the number version of the inputYear

console.log(String(23), 23); // String() just converts from whatever type to string type

//type coercion
console.log('I am ' + 23 + ' years old.'); //this creates one whole string because of automatic type coercion. JS understands there is a number between strings and is trying to be concatonated, so it coerces the 23 number to a string.

// the '+' operator always makes Javascript believe you want to concatonate into a string. So if you do something like 
let n = '1' + 1
n = n - 1
console.log(n)
// you will get 10 because the first assignment makes variable n have a value of a string '11', then the next assignment converts the '11' string into a number due to the subtraction operator and reduces it by one... equaling 10. If you have a '+' operator anywhere in the equation, JS will attempt to coerce the value into a string

// 🔥🔥/*** Truthy and Falsy Values ***/🔥🔥

// 5 Falsy Values: 0, '' (empty string), undefined, null, NaN (not a number)
// Anything that is not a Falsy value, will be a Truthy value

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

// you can use truthy and falsy values in the context of if/else statements

let money = 0;
if (money) {
    console.log('Do not spend it all');
} else {
    console.log('Get a job!');
}