/***********
 * Variables and datatypes
 */

// JavaScript is a lightweight, cross platform, object-oriented computer programming language

// Variable Declaration
1
// Number
// var x = 1;
// var johnson = 4;
// var john = 28
// console.log(john);

// 2 with let, you can reassign the value of a variable
// let a = 35;
// a = 67;
// console.log(a);

3
// const b = 26;
// b = 32;
// console.log(b);
// console.log('Hello johnson');

String
//  let johnson = "boy";
//  var street = 'Allen Street, Ikeja';
//  var food = 'Jollof Rice';
// var firstName = 'John';
// console.log(johnson);

// var lastName = 'Smith';
// var age = 28;

// Boolean
// var age = true;
// console.log(age);
// const married = false;
// console.log(married);

// Undefined
// let people;
// console.log(people);

// // Null
// let scores = null;
// console.log(scores);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// // camelCase naming
// let johnAge = 28
// console.log(johnAge)
// let favoriteFood = 'Smoothie';
// const maritalStatus = 'Engaged';
// const fullName = 'Johnson Tarila';
// Don't use custom javaScript key words to name your variables

// let true = 'bro'; is not allowed

// Variable naming rules
// var _3years = 3;
// console.log(_3years)
// var johnMark = 'John and MArk';
// var if = 23;


/***********
 * Variable mutation and type coercion
 */

// var firstName = 'Johnson';
// let age = 16;

// // Type coercion
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

//  console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

// // // Variable mutation
// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//alert('I am hungry ooo!');

//  var lastName = prompt('What is his last Name?');
//  console.log(firstName + ' ' + lastName);

/***********
 * Basic operators
 */

// let now = 2022;
// let ageJohn = 28;
// let ageMark = 33;

// Math operators
// let yearJohn = now - ageJohn;
// let yearMark = now - ageMark;

// console.log(yearJohn);
// console.log(yearMark);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);
// console.log(now - 10);

// Logical operators
// > greater than
// < less than
// >= greater than or equals to
// <= less than or equals to
// var johnOlder = ageJohn < ageMark; 
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof true);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof 7);

/***********
 * Operator precedence
 */

// let now = 2018;
// let yearJohn = 1999;
// let fullAge = 18;

// Multiple operators
// let isFullAge = now - yearJohn >= fullAge; // true
// console.log(isFullAge);

// // Grouping
// let ageJohn = now - yearJohn;
// let ageMark = 35;
// let averageAge = (ageJohn + ageMark) / 2;
// console.log(averageAge);

// Multiple assignments
// let x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// // More operators
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x--;
// console.log(x);
// x++;
// console.log(x);
// x /= 2;
// console.log(x);

//More operators
//equality operator === means is the same as
// !== means not the same as
// >= greater than or equals to
// <= less than or equals to
// && means 'and'
// || means 'or'

/***********
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3  (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

// Assignment 2
/*
 Create 2 variables that prompts users to enter their first name and last name and alert the result.
 */

// Assignment 3
/**
  Create 2 variables that prompts users to enter 2 different numbers. Store the result in another variable that adds the 2 numbers. Alert the new variable. 
  Using the logic above, do the same thing for subtraction, division and multiplication

  Goodluck once again😊
  */
 /* Solution!*/
// let massJohn = 50 kg
// let massMark = 63 kg
// let heightJohn = 1.8 meters
// let heightMark = 1.55  meters

// let johnBmi = massJohn / (heightJohn * heightJohn);
// let markBmi = massMark / (heightMark * heightMark);

// console.log(johnBmi, markBmi);

// var markBmiHigher = markBmi > johnBmi;
// / // console.log(markBmiHigher);

// console.log('Is Mark\'s BMI higher than John\'s? ' + markBmiHigher +'.'); 

               /* Solution  */
// const firstNumber = prompt('Enter first number');
// const secondNumber = prompt('Enter second number');
 /** First Method */
// const add = alert(+firstNumber + (+secondNumber));
// const minus = alert(+firstNumber - (+secondNumber));
// const divide = alert(+firstNumber / (+secondNumber));
// const multiply = alert(+firstNumber * (+secondNumber));

                /** Second Method */
// const add = alert(Number(firstNumber) + Number(secondNumber));
// const minus = alert(Number(firstNumber) - Number(secondNumber));
// const divide = alert(Number(firstNumber) / Number(secondNumber));
// const multiply = alert(Number(firstNumber) * Number(secondNumber));
  




//   let number1 = prompt('Enter first number');
//   let number2 = prompt('Enter second number');
// //   let addition = Number(number1) + Number(number2);
// //   let subtraction = Number(number1) - Number(number2);
// //   let division = Number(number1) / Number(number2);
// //   let multiply = Number(number1) * Number(number2);
// //   alert(addition);
// //   alert(subtraction);
// //   alert(division);
//   alert(multiply);

//Assignment 1
/*
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92; //kg
var heightJohn = 1.95; //meters

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/

//Assignment 2
// const firstName = prompt('What is your first name?');
// const lastName = prompt('What is your last name?');
// const fullName = alert('Your full name is ' + firstName + ' ' + lastName);

//Assignment 3
// const firstNumber = prompt('Enter first number');
// const secondNumber = prompt('Enter second number');
// const sum = Number(firstNumber) + Number(secondNumber);
// const minus = Number(firstNumber) - Number(secondNumber);
// const divide = Number(firstNumber) / Number(secondNumber);
// const multiply = Number(firstNumber) * Number(secondNumber);
// alert(sum);

/***********
 * If / else statements
 */

// if(/condition is met/) {
//   do whatever is here
// } else {
    // do what you have here
// }
  
///More Operators/
// === means 'is the same as' 
// !== means 'not the same as'
// || means 'or'
// && means 'and'


// var firstName = 'John';
// var civilStatus = 'complicated';

// if (civilStatus === 'complicated') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon');
// }

// var isMarried = false;
// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon.');
// }

// let manchesterUnited = 'Average Club';

// if(manchesterUnited === 'Bad Club') {
//     alert('ManU will suffer for 600 years 😂' );
// } 


// if('condition') {
//     console.log();
// } else {
 //   console.log();
// }

// var massMark = 78; // kg
// var heightMark = 1.69; // meters

// var massJohn = 902;
// var heightJohn = 1.95;

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//     console.log('Mark\'s BMI is higher than John\'s.');
// } else {
//     console.log('John\'s BMI is higher than Marks\'s.');
// }

/***********
 * Boolean logic
 */

// var firstName = 'Seun';
// var age = 42;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.');
// } else {
//     console.log(firstName + ' is a man.');
//  }

/***********
 * The Ternary Operator and Switch Statements
 */

// var firstName = 'John';
// var age = 10;

// // //Ternary operator
// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');
// age >= 18 && console.log(firstName + ' drinks beer.')
// age >= 18 ? console.log(firstName + ' drinks beer.') : null
// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

//Switch statement

// let job = 'teacher';

// switch(job) {
//         case 'teacher':
//         console.log('Teacher');
//         break;
//         case 'programmer':
//         console.log('Web dev');
//         break;
//         case 'designer':
//         console.log('product designer');
//         break;
//         case 'engineer':
//         console.log('computer engineer');
//         break;
//         default: console.log('Worker');     
// }




// var firstName ='Seun';
// var job = 'teacher';
// switch (job) {
//     case 'teacher':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Abuja.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites.');
//         break;
//     default:
//         console.log(firstName + ' does something else.');
// }

/***********
 * CODING CHALLENGE 2
 */

/*
Ayodele and Uchenna both play basketball in different teams. In the latest 3 games, Ayodele's team scored 89, 120 and 103 points, while Uchenna's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Jumoke also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. 
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

You can do this  💪
*/

// More Assignment
/**
 1. Create a simple conditional statement that checks if a variable named favoriteFood is different types of food. Check for minimum of 5 different food. Do these using if/else statements and switch statements.

 2. Create a simple age checking verifier that prompts users to enter their name and also prompts them to enter their age and alerts based on the conditions below:
 a. A person less than 16 is alerted to be too young to drive
 b. A person between 16 to 18 is alerted to drive with caution
 c. A person who is over 18 is alerted to continue driving 

 3.Use the ternary operator to check if 100 points is enough to win the league in EPL(English Premier League). Hint: you can create 2 variables; one for any team name of your choice and the second for 100points.
 You can change the value of the variable to see the toggle in the ternary operator 
 */
// var scoreAyo = (89 + 120 + 103) / 3;
// var scoreUche = (129 + 94 + 123) / 3;
// var scoreJumoke = (97 + 134 + 105) / 3;
// console.log(scoreAyo, scoreUche, scoreJumoke);

// if (scoreAyo > scoreUche) {
//     console.log('Ayodele\'s team wins with ' + scoreAyo + ' points');
// } else if (scoreUche > scoreAyo) {
//     console.log('Uchenna\'s team wins with ' + scoreUche + ' points');
// } else {
//     console.log('There is a draw');
// }

// if (scoreAyo > scoreUche && scoreAyo > scoreJumoke) {
//     console.log('Ayodele\'s team wins with ' + scoreAyo + ' points');
// } else if (scoreUche > scoreAyo && scoreUche > scoreJumoke) {
//     console.log('Uchenna\'s team wins with ' + scoreUche + ' points');
// } else if (scoreJumoke > scoreAyo && scoreJumoke > scoreUche) {
//     console.log('Jumoke\'s team wins with ' + scoreJumoke + ' points');
// } else {
//     console.log('There is a draw');
// }

// More Assignment
/**
 1. Create a simple conditional statement that checks if a variable named favoriteFood is different types of food. Check for minimum of 5 different food. Do these using if/else statements and switch statements.

 2. Create a simple age checking verifier that prompts users to enter their name and also prompts them to enter their age and alerts based on the conditions below:
 a. A person less than 16 is alerted to be too young to drive
 b. A person between 16 to 18 is alerted to drive with caution
 c. A person who is over 18 is alerted to continue driving 

 3.Use the ternary operator to check if 100 points is enough to win the league in EPL(English Premier League). Hint: you can create 2 variables; one for any team name of your choice and the second for 100points.
 You can change the value of the variable to see the toggle in the ternary operator 
 */

// const favoriteFood = 'Party Jollof Rice';

/* Solving using if/Else statements */
//  if(favoriteFood === 'Eba') {
//     console.log('My favorite food is ' + favoriteFood)
// } else if(favoriteFood === 'Pringles') {
//     console.log('My favorite food is ' + favoriteFood)
// } else if (favoriteFood === 'Amala') {
//     console.log('My favorite food is ' + favoriteFood)
// } else if(favoriteFood === 'Party Jollof Rice') {
//     console.log('My favorite food is ' + favoriteFood)
// } else {
//     console.log('I like every food 😊')
// }

/* Solving using switch statement */

// switch(favoriteFood) {
//     case 'Eba':
//     console.log('My favorite food is ' + favoriteFood)
//     break;
//     case 'Amala':
//     console.log('My favorite food is ' + favoriteFood)
//     break;
//     case 'Pringles':
//     console.log('My favorite food is ' + favoriteFood)
//     break;
//     default:
//     console.log('I love food too much 👽')
// }

//3.
// var myTeam = 'Arsenal FC';
// var points = 86;

// points >= 100 ? console.log(myTeam + ' won the league with ' + points) : console.log(myTeam + ' will do better next season');

//Assignment 2
//  const userName = prompt('What is your name?');
//  const userAge = prompt('How old are you?');
// //  console.log(userName, userAge);
// if(userAge < 16) {
//     alert(userName + ' You are too young to drive!')
// } else if(userAge >= 16 && userAge <= 18) {
//     alert(userName + ', please drive with caution!')
// } else {
//     alert(userName + ', You are indeed a road comrade. Power on!')
// }

/***********
 * Functions
 */

// A function is simply a piece of reusable code

// Remember this from Mathematics. you don't have to uncomment the examples from maths
// f(x) = 2x + 3;
// f smallAdd(x) = 2x + 3;
// f(2) = 2(2) + 3; //7
// f(3) // 9
// f(10) // 23
// f(8) = 2(8) + 3; //19
// f quadraticAdd(x) = 2x^2 + 4x + 5;
// f polynomialAdd(x) = 2x^3 + 4x^2 + 5x + 3;
// f(2)
// f(-5)
// f smallAdd(2) = 2(2) + 3;

// Function declaration // With parameters
// function multiplyFunc(x, y) {
//     return x * y;
// }

// function multiplyFunc(x, y) {
//     if(x) {
//         return x;
//     } else if(y) {
//    return y;
//}
//     return x * y;
// }

//Calling a Function or Invoking a Function //Parameters are now arguments
// const twelve = multiplyFunc(4, 3);
// console.log(multiplyFunc(4, 3));

//You can store the value of a called function in a variable
// let myValue = multiplyFunc(21, 3);
// // console.log(multiplyFunc(4, 3));
// console.log(myValue);

//  function smallAddToThree(x) {
//   return  (2 * x) + 3;
// }
// console.log(typeof smallAddToThree);
// const twentyThree = smallAddToThree(10);
// console.log(smallAddToThree(2));

//Function Declaration
// function calculateAge(birthYear) {
//     return 2022 - birthYear;
// }

// alert('Hello');
// prompt('What is your name?'); 
// calculateAge(1990);
// var yearMike = 1948;
// var ageMike = calculateAge(yearMike);
// var ageJane = calculateAge(1969);
// console.log(calculateAge(1990), ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired in ' + retirement + ' years')
//     }
// }

// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');

/***********
 * Function Declarations and  Function Expressions
 */

// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
// const whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//             break;
//         case 'driver':
//             return firstName + ' drives a cab in Lisbon.'
//             break;
//         case 'designer':
//             return firstName + ' designs beautiful websites';
//             break;
//         default:
//             return firstName + ' does something else';
//     }
// }

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mark'));

//Difference between function declaration and function expression


// console.log(calculateAge(2007))

//  function calculateAge(birthYear) {
//     return 2022 - birthYear;
// }


// let calculateAge = function(birthYear) {
//     return 2022 - birthYear;
// }

/*
Steve Smith, James Ibikunle, Ayotunde Haastrup and Ikenna Richard are born in years 1996, 1985, 2007 and 2015 respectively. 

Based on their ages, boys drink milk, teenagers drink juice, young men drink soda and adults drink beer.

A boy is less than 13, a teenager is less than 20, a young man is less than 30 and a man is 30 and above.
 

1.	Store the full names and years of birth of each person in variables.

2.	Create a function containing a boolean logic that logs to the console the kind of drink a male takes based on the male’s age. The function should have 2 parameters (separated by commas), containing the year and full name of each male figure listed above. 

NB: To calculate the age in the function, you can use the age
 function we studied earlier.

function age(birthYear) {
    return 2022 - birthYear;
}

age(yearSmith);

Goodluck🙂
*/

//2.
//Write a function that converts a parameter, length from inches to centimeters. HINT: 1 inch is 2.54cm

//3.
/*Create a function and set it equal to a variable. Your function should:

If passed a number, return the tripled value.

If passed a string, return the string passed in a sentence. (eg string passed + ' is a string')
If passed a boolean, return the boolean value (Either true or false)

If NOT passed a number, string or boolean, return the data unchanged.
*
//ASSIGNMENT 1

function maleDrinkType(year, fullName) {
    function age() {
        return 2022 - year;
    }
    const maleAge = age(year);

    if(maleAge < 13) {
        alert(fullName + ' drinks milk')
    } else if (maleAge >= 13 && maleAge < 20) {
        alert(fullName + ' drinks juice')
    } else if(maleAge >= 20 && maleAge <= 29) {
        alert(fullName + ' drinks soda')
    } else {
        alert(fullName + ' drinks beer')
    }
}

// let nameSmith = 'Steve Smith';
// let yearSmith = 1996;

// maleDrinkType(yearSmith, nameSmith);
// maleDrinkType(2007, 'Ayotunde Haastrup');
// maleDrinkType(2015, 'Ikenna Richard');


                //ASSIGNMENT 2

// function inchesConverter(length) {
    // return 2.54 * length;
//     return Math.floor(2.54 * length) + 'cm';
// }

// inchesConverter(2);

                //ASSIGNMENT 3

// const myFunction = function(data) {
//     if(typeof data === 'number') {
//        return data * 3;
//     } else if(typeof data === 'string') {
//        return  data + ' is a string';
//     } else if(typeof data === 'boolean') {
//         // return data === true ? false : true;
//         return !data;
//     } else {
//         return data
//     }
// }
/***********
 * Arrays
 */

//  let names = ['Ibikunle Amosun', 'Ayotunde Haastrup', 'James Ibidun', 'Ikenna Richard', 'Steve Smith', 'Seun Coker']

// Initialize new array
// let names = ['John', 'Mark', 'Jane', 'Michael'];
// let classBoys = ['Mubarak Alabi', 'Seyi Fowe', 'Jerry Sawyer', 'Michael Strong', 'John Ben'];
// let updatedClassBoys = ['Chinonso Victor', 'Victor Adebukunola', 'Steven Ayowole', 'Olumide McJones', 'Semilore Uninterested', 'Eniola Tired', 'Edward Later']
// updatedClassBoys[0]
// classBoys[0]
// console.log(classBoys[3]);
// console.log(classBoys.length);

// console.log(names[2]);
// console.log(names.length);

// // Mutate array data
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);

// // // Different data types
let john = ['John', 'Smith', 1990, false, [1, 2, 4], null, undefined];
 console.log(john[4][1] = 'Seun');
john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.shift();
console.log(john);

// let coker = 'Coker Onyensogbu';
// console.log(coker.length);

// console.log(john.indexOf('designer'));
// john.push('designer');
// console.log(john.indexOf('designer'));


// let isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
// console.log(isDesigner);

//Examples on the browser console(No need to uncomment)
// let john = ['John', 'Smith', 1990, 'designer', false];
// undefined
// john.push('blue');
// 6
// john
// (6) ['John', 'Smith', 1990, 'designer', false, 'blue']
// john.unshift('Mr.');
// 7
// john
// (7) ['Mr.', 'John', 'Smith', 1990, 'designer', false, 'blue']
// john.pop();
// 'blue'
// john
// (6) ['Mr.', 'John', 'Smith', 1990, 'designer', false]
// john.shift()
// 'Mr.'
// john
// (5) ['John', 'Smith', 1990, 'designer', false]
// john.pop(1);
// false
// john
// (4) ['John', 'Smith', 1990, 'designer']
// john.pop(3);
// 'designer'
// john.indexOf(23)
// -1
// john
// (3) ['John', 'Smith', 1990]
// john.indexOf(2);
// -1
// john.indexOf(1990);
// 2
// john.indexOf(0);
// -1
// john.indexOf(1);
// -1
// john.indexOf(smith);
// john.indexOf('smith');
// -1
// john.indexOf('Smith');
// 1
// let isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
// undefined
// isDesigner
// 'John is NOT a designer'
// john.push('designer');
// 4
//  isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
// undefined
// isDesigner
// 'John is a designer'

/***********
 * CODING CHALLENGE 3
 */

/*
Michael and his family went on a holiday and went to 3 different restaurants. The bills were NGN124, NGN48 and NGN268.

To tip the waiter a fair amount, Michael created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than NGN50, 15% when the bill is between NGN50 and NGN200, and 10% if the bill is more than NGN200.

In the end, Michael would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

You can do this 😀
*/
;

