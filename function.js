// Question:-1
// Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8

// Solution:-1
function powerV1(a, b) {
  return a ** b;
}
console.log(powerV1(2, 4));

//Solution:-2
const power = (a, b) => a ** b;
power(2, 3);

// Question:-2
// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80

const areaOfHexagon = (area) => {
  return ((3 * Math.sqrt(3)) / 2) * (area * area);
};
areaOfHexagon(10);

// Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

const noOfWords = (str) => str.split(" ").length;
noOfWords("We are neoGrammers");

//Question No:- 4
// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1

const findMin = (...args) => Math.min(...args);
findMin(3, 5);
findMin(3, 5, 9, 1);

//Question no:-5
// Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9

const findMax = (...arg) => Math.max(...arg);
findMax(3, 5);
findMax(3, 5, 9, 1);

//Question No:-6
// Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle

const typeOfTriangle = (a, b, c) => {
  if (a === b && b === c) console.log("Equilateral Triangle");
  else if (a === b || b === c || c === a) console.log("Isosceles Triangle");
  else console.log("Scalene Triangle");
};
typeOfTriangle(30, 60, 90);

// Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5

const arrayLength = (arr) => arr.length;
arrayLength([1, 2, 3, 4, 5]);
