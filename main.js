// console.log("Hello from main.js");
// console.log("Couple more");

// let age = 25; //Changable
// console.log(age);

// const salary = 1150; //Unchangable
// console.log(salary);

// //Types:
// //Primitive
// // String, Number, Boolean, Undefined, Null, BigInt, Symbol
// //Non Primitive
// // Objects

// const name = "Markus";
// const language = "JavaScript";
// const workspace = `Decta`;

// let result = undefined;
// let data = null;

// const person = {
//   firstName: "Karina",
//   lastName: "Babchenoka",
//   age: 30,
// };

// console.log(person.firstName);

// const oddNumber = [1, 3, 5, 7, 9];
// console.log(oddNumber[1]);

// let a = 10;
// a = "markus";
// a = true;

// console.log(a);

// let x = 10
// let y = 5

// console.log(x % y)
// console.log(++x)
// console.log(--y)
// console.log(x !== y)
// console.log(y <= x)

// const isValidNumber = x > 20 || 8 > y
// console.log(isValidNumber)

// const isValid = true
// console.log(!isValid);

// console.log("Bruce " + "Wayne");

// //             divide, is the dividing equals 0, if yes, then isEven is true, if not equals to false
// const isEven = 10 % 2 === 0 ? true : false
// console.log(isEven);

//false = 0, true = 1, null = 0, undefined with anything results into NaN

// console.log(true + "3");
// console.log("4" - "Markus");

// //Number(()) is like parseInt in Java // convert strings to numbers
// console.log(Number("5"));
// //String(()) is parsing value to the String //
// console.log(String("500"));

// console.log((500).toString());

// //Global method to parse into true/false
// console.log(Boolean(10)); // null undefined 0 '' NaN = all return false, everything else returns true

// const var1 = null
// const var2 = undefined

// console.log(var1 == var2);
// console.log(var1 === var2);

// const num = 0

// if (num > 0) {
//     console.log("Number is positive")
// } else if (num < 0) {
//     console.log("Number is negative");
// } else {
//     console.log("Number is zero");
// }

// const color = 'yellow';

// switch(color) {
//     case 'red':
//         console.log("Color is red")
//         break
//     case 'green':
//         console.log("Color is green");
//         break
//     case 'blue':
//         console.log("Color is blue");
//         break
//     default:
//         console.log("Not a valid color");
// }

// for(let i = 1; i <= 5; i++) {
//     console.log("Iteration number " + i);
// }

// let i = 1
// while(i <= 5) {
//     console.log("Iteration number " + i)
//     i++
// }

// let m = 1
// do {
//     console.log("Iteration number " + m);
//     m++
// } while (m <= 5);

// const numArray = [1, 2, 3, 4, 5]
// for (const num of numArray) {
//     console.log("Iteration number " + num)
// }

// function greet(username) {
//     console.log("Good morning " + username);
// }

// //Invoking the function
// greet('Markus')

// //Input parameters (a, b) same as public void hello(String text)
// function add(a, b) {
//     return a + b
// }

// const arrowSum = (a, b) => a + b
// const addFive = (num) => num + 5

// //Declaring variable and assigning the value from function
// const sum = arrowSum(25, 25)
// console.log(sum);

// //Global set variable
// const myNum = 100
// //Global set not gonna overwrite the declared variables in the functions/loops
// const myName = 'Superman'

// if(true) {
//     const myName = 'Markus'
//     console.log(myName);
//     console.log(myNum);
// }

// function testFunc() {
//     const myName = 'Batman'
//     console.log(myName);
//     console.log(myNum);
// }

// testFunc()

//In JavaScript you can declare functions within the functions
//Lecsical scoping (nested functions?) from inner until global scope
// let a = 10
// function outer() {
//     let b = 20
//     function inner() {
//         let c = 30
//         console.log(a, b, c);
//     }
//     inner()
// }
// outer()

//Closure concept 
function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner
}
const fn = outer();
fn()
fn()

