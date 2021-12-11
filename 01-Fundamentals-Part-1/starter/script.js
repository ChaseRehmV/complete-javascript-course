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

// in the above example, the if checks for the variable money being true or false, the value being '0' indicates a falsy value, so the 'else' portion is initiated. If the money variable actually had an amount higher than 0, it would trigger the if portion of the statement

// 🔥🔥/*** == vs. === Equality Operators ***/🔥🔥

// the == (double equal or loose equal) performs type coercion. this means if a string and a number are the same value, the == operator will return 'true'

// the === (tripe equal or strict equal) will not perform type coercion. this means if the number and string are the same value, the === operator will still return false because one is a string and the other is a number

// the != (loose difference) and !== (strict difference) are the inverse of the two operators above. 

// it is always best practice to use the strict version of each unless a very special use case if given to use the loose version. For example, if you need to check for equality of numbers when the input from a user will always be a string, change the input to convert the string to a number before the if/else statement check for equality

// 🔥🔥/*** Boolean Logic ***/🔥🔥

// Boolean logic focuses around the use of the AND, OR and NOT operators. For two boolean values to be compared, you use AND or OR. the NOT operator will result in the inverse of the current value. 

// For two boolean values to result in TRUE using the AND operator, both (or all) boolean values must be true

// for two boolena values to result in TRUE using the OR operator, at least one value must be true

// 🔥🔥/*** Logic Operators ***/🔥🔥

// The operator for AND is '&&'
// the operator for OR is '||'
// the NOT operator is '!' placed before the variable that holds a boolean value

// 🔥🔥/*** Switch Statements ***/🔥🔥

// Switch statements use strict equality comparison. So string '23' and the number 23 would not trigger the case statement

const day = 'tuesday';

switch(day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup.');
        break;
    case 'tuesday':
        console.log('Prepare theory videos.');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples.');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}

// challenge to write the same thing but with an if/else

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup.');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos.');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples.');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day!');
}

// 🔥🔥/*** Statements and Expressions ***/🔥🔥

// Statements and expressions are different. 
// An expression is just a piece of code that produces a value. For example: 2+3, 'Jonas', true && false && !true,
// A statement is mor like a full sentence that is incorporating more logic. Examples include if/else statements, switch:case statements, etc
// Sometimes Javascript expects ONLY one or the other. For example, with a string template literal, the ${} parts must contain only expressions, or things that directly produce a value for the template literal to display. You cannot put a statement inside one of these template literal values.

// 🔥🔥/*** The Conditional Ternery Operator ***/🔥🔥

age >= 15 ? console.log('I like to drink wine.') : console.log('I like to drink water');

// The ternery operator is an express, which means it can be used in scenarios where Javascrip expects an expression and not a statement. For example, it can be used in template literals

const description2 = `I like to drink ${age <= 15 ? 'water 💧' : 'wine 🍷'}`
console.log(description2)

// this will output 'I like to drink water 💧'. If you were to use an if/else statement for this, you would need to declare a variable outside of the if/else statement then reassign that variable within the if/else statement

let drink;
if (age <=15) {
    drink = 'water';
    console.log(`I like to drink ${drink}`);
}