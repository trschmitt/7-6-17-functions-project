// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write an example of using the function.

function max(num1, num2) {
  let result;
  if ( num1 > num2 ) {
    result = num1;
  } else if ( num1 < num2 ) {
    result = num2;
  } else {
    result = "neither, they are the same.";
  }
  console.log(num1, num2);
  return result;
}

console.log("Largest number is " + max(10000, 10001));


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write an example of using the function.

function maxOfThree(number1, number2, number3){
  let largest;
  if ((number1 > number2) && (number1 > number3)) {
    largest = number1;
  } else if ((number2 > number1) && (number2 > number3)) {
    largest = number2;
  } else if ((number3 > number1) && (number3 > number2)) {
    largest = number3;
  } else {
    largest = "neither, they are the same.";
  }
  console.log(number1, number2, number3);
  return largest;

}

console.log("Largest number is " + maxOfThree(0, 15, 30));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
  let vowelOrNah;
  if (char == "A" || char == "E" || char == "I" || char == "O" || char == "U" || char == "Y") {
    vowelOrNah = true + char + " is a vowel";
  }else {
    vowelOrNah = false + ' ' + char + " is not a vowel";
  }
  console.log(char);
  return vowelOrNah;
}

console.log(isVowel("Z"));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(x, z) {
  console.log(x + " * " + z);
  return x + z;
}
console.log(sum(50, 60));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(x, y, z) {
  console.log(x, y, z);
  return ((x + y + z) / 3);
}

console.log(avg(4, 5, 20));


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(iAmString) {
  console.log(iAmString);
  return iAmString.length;
}
console.log(getLength("This is a test string to see how long it is. kind of like snake"));

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(para1, para2) {
  let parasRFun;
  if (para1 < para2) {
    parasRFun = true;
  }else {
    parasRFun = false;
  }
  console.log(para1, para2);
  return parasRFun;
}

console.log(greaterThan(40, 50));


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(singleP) {
  return "The " + singleP + " are the best team in the NHL!";
}
console.log(greet("Wild"));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(lib1, lib2, lib3, lib4) {
  let sentence = lib1 + " and " + lib2 + " are the " + lib3 + " basketball players in the " + lib4 + ".";
  return sentence;
}

console.log(madlib("Max", "Lucy", "most fantastic", "World"));
