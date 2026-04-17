// This is a SINGLELINE COMMENT

/* This is a MULTI LINE COMMENT
The code below is an example STATEMENT
(instruction/command)
Every statement ends with a SEMICOLON
*/
console.log("welcome to javascript!");

// VARIABLES are named storage contaienrs for data (info)

// DECLARE a variable  withe the key world LET
let username;

// ASSIGN a value to a named variable
username = "connor";

// DECLARE + ASSIGN a new variable in one line
let pokemon = "zygarde"

// See the value stored in a variable
console.log(username);
console.log(pokemon);

// Store numbers in a variable
//Create a variable that holds a NUMBER
let luckyNum = 13;
console.log(luckyNum);
//CHANGE the value stored in a variable (don't repeat LET)
luckyNum = 8;
console.log(luckyNum);

// MATH OPERATORS (+,-,*,/)
let age = 16;
let ageInTEn = age + 10;
let ageDogYears = age / 7;
let leonHumanAge = 5 * 7;
console.log(ageDogYears);

// PEMDAS appplies when you have multiple operators
let score = 0;
score = score + 8 - 16 * 2 / (7 + 12);
console.log(score);

// Combine 2 "litteral" Strings (CONCATENATION)
console.log("My age is " + "16");
// or CONCATENATE (combine) a literal String with a VARIABLE
console.log("My age is " + age);

// can also concatinate while making a variable
let user = "Connor";
let message = "Welcome " + user  + "!";
console.log(message);