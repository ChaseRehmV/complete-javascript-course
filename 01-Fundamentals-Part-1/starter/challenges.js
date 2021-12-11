/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

let markHigherBmiTd1;
let markHigherBmiTd2;
const markWeightTd1 = 78;
const markHeightTd1 = 1.69;
const markWeightTd2 = 95;
const markHeightTd2 = 1.88;
const johnWeightTd1 = 92;
const johnHeightTd1 = 1.95;
const johnWeightTd2 = 85;
const johnHeightTd2 = 1.76;

const markBmiTd1 = markWeightTd1 / (markHeightTd1 ** 2);
const markBmiTd2 = markWeightTd2 / (markHeightTd2 ** 2);
const johnBmiTd1 = johnWeightTd1 / (johnHeightTd1 ** 2);
const johnBmiTd2 = johnWeightTd2 / (johnHeightTd2 ** 2);

markHigherBmiTd1 = markBmiTd1 > johnBmiTd1;
console.log(markHigherBmiTd1);
markHigherBmiTd2 = markBmiTd2 > johnBmiTd2;
console.log(markHigherBmiTd2);


/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😊
*/

if (markBmiTd1 > johnBmiTd1) {
    console.log(`Mark's BMI (${markBmiTd1}) is higher than John's BMI (${johnBmiTd1})`)
} else {
    console.log(`John's BMI (${johnBmiTd1}) is higher than Mark's BMI (${markBmiTd1})`)
};

if (markBmiTd2 > johnBmiTd2) {
    console.log(`Mark's BMI (${markBmiTd2}) is higher than John's BMI (${johnBmiTd2})`)
} else {
    console.log(`John's BMI (${johnBmiTd2}) is higher than Mark's BMI 
    (${markBmiTd2})`)
};

/* 
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK
*/

let dolphinsAvgScore = (97 + 112 + 101) / 3;
let koalasAvgScore = (109 + 95 + 106) / 3;

console.log(dolphinsAvgScore);
console.log(koalasAvgScore);

if ((dolphinsAvgScore > koalasAvgScore) && (dolphinsAvgScore >= 100)) {
    console.log('The Dolphins win!');
} else if ((dolphinsAvgScore < koalasAvgScore) && (koalasAvgScore >= 100)) {
    console.log('The Koalas win!');
} else if ((dolphinsAvgScore === koalasAvgScore) && dolphinsAvgScore >= 100 && koalasAvgScore >= 100) {
    console.log('There has been a draw!');
} else {
    console.log('No trophy can be awarded! Minimum score requirements not met!');
}

/*
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
*/

let billValue = Number(prompt('Please enter your bill amount below.'));

billValue >= 50 && billValue <= 300 ? alert(`The bill was ${billValue}, the 15% tip was ${billValue * .15}, the total value was ${billValue * .15 + billValue}.`) : alert(`The bill was ${billValue}, the 20% tip was ${billValue * .2}, the total value was ${(billValue * .2) + billValue}.`)

