//24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array

//Equality with strings//
console.log("Testing equality with strings:");
console.log ("apple" == "apple");
console.log("Apple" == "Apple");

//testing lowercase function
console.log("Testing with lowercase function:");
console.log("Apple".toLowerCase()=="apple");

//numerical tests

console.log("Numerical tests:");           
console.log(10>5);
console.log(4352<7583);

//testing using "and" and "or" operator

console.log("Test with and or operators:");
console.log( true && false);
console.log(false);

let fruits_0 : string[] = ["apple", "banana", "mango"];
console.log("Is 'apple' in fruits?");
console.log(fruits_0.includes("apple"));

//test weather item is not in an array

console.log("Is 'mango' is not in fruits?")
console.log(! fruits_0.includes("mango"));
