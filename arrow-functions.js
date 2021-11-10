/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function adddTwoNumbers(a, b) {
//     return a + b;
// }
// let sum = adddTwoNumbers(4, 24);
// console.log(sum);
// Arrow Function With Parameters
const  adddTwoNumbers =(a, b) => {
    return a + b;
}
let sum = adddTwoNumbers(4, 24);
console.log(sum);
// Single Line Arrow Function With Parameters
// const addTwoNumber2 = (a, b) => (a + b); //also valid
const addTwoNumber2 = (a, b) => a + b;
let sum2 = addTwoNumber2(4, 87);
console.log(sum2);
// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello you!');

const sayHello = () => console.log('bye');
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        This is a multiline!
    </p>    
    `
)
console.log(returnMultipleLines());