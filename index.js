// Note: in-line commet

// Note: multi-line commet
/*
 */

/* Note: Data types
indefined, null, boolean, string, symbol, number, and object 
*/

var myName = "abra";
myName = 8;

let ourName = "freeCodeCamp";

const pi = 3.14;

// Note assign to varaible
var a;
var b = 2;

a = 7;
b = a;

// Note unassign variables
a = null;

// Note variable name
var test_VARIABLE_Number1 = 1;

// Note add, subtract, multiply, divide
var sum = 1 + 1;
var difference = 1 + 1;
var product = 1 * 1;
var quotient = 1 / 1;

// Note increment number
var myVarIncrement = 87;
myVarIncrement++;

// Note decriment number
var myVarDecriment = 70;
myVarDecriment--;

//Note decimal numm
var decimal = 60.09;
var productDecimal = 2.0 * 2.5;
var quotientDeciaml = 4.4 / 2.0;

// Note finding remainder
var remainder = 11 % 3;

// Note compound assignment with augmented addition
var varAddCompound = 6;
var varSubtractCompound = 6;
var varProductCompount = 6;
var varQuotientCompount = 6;
//don't do this: varCompound = varCompound + 6
//instead
varAddCompound += 3;
varSubtractCompound -= 3;
varProductCompount *= 3;
varQuotientCompount /= 3;

//Note assign string
//var singleQuote = 'singleQuote'; <- possible
var doubleQuote = "doubleQuote";
var backticks = `backticks`;

//Note Escaping literal quote strings
//var stringWithQuote = "I am a \"double quoted\" string inside double quotes"
var stringWithQuote = 'I am a "double quoted" string inside double quotes';
//var stringWithSingleQuote ='I am a \'single quoted\' string inside single quotes';
var stringWithSingleQuote = "I am a 'single quoted' string inside single quotes";

// Note escape sequences in string
/***** 
CODE OUTPUT
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
******/

//Note concat strings
var stringHello = "Hello\t";
var stringWorld = "World";
var hello_world = stringHello + stringWorld;

var stringCompound = "I am one. ";
stringCompound += "I am two. ";

var addName = "Abra";
var stringGreet = "Hi, I'am " + addName;

//Note string length
var hello_world_length = hello_world.length;
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var letter = alphabet[1];
var lastLetter = alphabet[alphabet.length - 1];

//Note immutable sting
var immutable_sting = "Jello World";
immutable_sting[0] = "H"; // immutable_sting will not change
immutable_sting = "Hello World"; // the variable will change

//Note array
var myArray = ["John", 23];

//Note Nested Arrays
var nestedArray = [
  ["Abra", 25],
  ["louise", 10],
];

//Note Access Aray Data with Indexes
myArray[0]; // John
myArray[1]; // 23

//Note Modify Array Data with indexes
var arrayAnimals = ["dog", "cat", "rat", "cow"];
arrayAnimals[0] = "ASKAL";

//Note Access Multi-Dimensional Arrays with Indexes
var multiArray = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];
multiArray[0][2]; // 'c'
multiArray[1][1]; // 'e'
multiArray[2][1]; // 'h'

// Note manipulate arrays with push()
var arrayPush = ["abra", "lois"];
arrayPush.push("bacor"); // "abra", "lois", "bacor"

// Note Note manipulate arrays with pop()
var arrayPop = ["aat", "bat", "cat", "dat", "eat"];
arrayPop.pop(); // "aat", "bat", "cat", "dat"

// Note Note manipulate arrays with shift()
var arrayShift = ["aat", "bat", "cat", "dat", "eat"];
arrayShift.shift(); // "bat", "cat", "dat", "eat"

// Note Note manipulate arrays with unshift()
var arrayUnshift = ["abra", "lois", "bacor"];
arrayUnshift.unshift("dan"); // "dan","abra","lois","bacor"

// Note write reusable code with functions
function reusableFunction() {}
//reusableFunction();

//Note Passing values to functions with arguments
function argsFunction(a, b) {
  console.log(a, b);
}
//argsFunction(3, 7);

//Note global scope and functions
var globalVar = 10;

function func1() {
  oopsGlobal = 5; // func2() can access it
  // var oopsGlobal = 5; // cannot access it
}

function func2() {
  var output = "";
  if (typeof globalVar != "undefined") {
    output += "globalVar: " + globalVar;
  }
  if (typeof oopsGlobal != "undefined") {
    output += ", oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// func1();
// func2();

//Note local scope and functions
function myLocalScopre() {
  var myVar = 5;
  //  console.log(myVar);
}
// myLocalScopre();
// console.log(myVar);

//Note global vs local scope in functions
var outerWear = "T-shirt";
function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}
//console.log(myOutfit());

//Note Return a value from a function with return
function minusSeven(num) {
  return num - 7;
}
//console.log(minusSeven(10));

//Understanding undefined value returned from a function
var sum = 0;
// returns undefined
function addThree() {
  sum += 3;
}

//Note Assignment with a return value
var processed = 0;

function processArg(num) {
  return (num + 3) / 3;
}
processed = processArg(10);

//Note Stand in line
function nextInLine(arr, item) {
  arr.push(item);
  arr.shift();
  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];
// console.log(nextInLine(testArr, 6));

//Note boolen values
function booleanfunction() {
  return false;
}

//Note use conditional logic with if statements
function trueOrFalse(isItTrue) {
  if (isItTrue) {
    return "yes, it's true";
  }
  return "No, it's false";
}

//Note comparoson with the equality operator
function comapreEquals(val1, val2) {
  if (val1 === val2) {
    return "Equal: === ";
  }

  if (val1 == val2) {
    return "Equal: == ";
  }

  return "Not equal";
}
// console.log(comapreEquals(1, "1"));

function comapreNotEquals(val1, val2) {
  if (val1 != val2) {
    return "Not Equal: == ";
  }

  if (val1 !== val2) {
    return "Not Equal: === ";
  }

  return "Equal";
}
// console.log(comapreNotEquals(1, "1"));

// Note comaparison with the logical and operator
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  if (val > 10) {
    return "over 10";
  }
  return "10 or under";
}

function testGreaterThanEqual(val) {
  if (val >= 20) {
    return "Over 20 or equal to 20";
  }
  if (val >= 10) {
    return "over 10 or equal to 10";
  }
  return "less than 10";
}

function testLessThan(val) {
  if (val < 25) {
    return "under 25";
  }
  if (val < 55) {
    return "under 55";
  }
  return "55 over";
}

function testLessThanEqual(val) {
  if (val <= 12) {
    return "under 12 or equal to 12";
  }
  if (val <= 24) {
    return "under 24 or equal to 24s";
  }
  return "More than 24";
}

//Note Comparisions with the logical and operator
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "yes";
  }
  return "no";
}

//Note Comparisions with the logical or operator
function testLogicalOR(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }

  return "Inside";
}

//Note Else statement
function testElse(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = " 5 or smaller";
  }
  return result;
}

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Betwwe 5 and 10";
  }
}

// Note logical order in if else statements
function testElseIf(val) {
  if (val < 5) {
    return "less than 5";
  } else if (val < 10) {
    return "less than 10";
  } else {
    return "Betwwe 5 and 10";
  }
}

//Note chaining if else statements
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}

//Note switch statements and default optioon
function caseInSwitch(val) {
  var answer = "";

  switch (val) {
    case 1:
      answer = "alpha";
      break;

    case 2:
      answer = "beta";
      break;

    case 3:
      answer = "gamma";
      break;

    case 4:
      answer = "delta";
      break;

    default:
      answer = "Unknown";
  }
  return answer;
}

//Note Multiple identical options in switch statements
function sequentialSizes(params) {
  var answer = "";
  switch (params) {
    case 1:
    case 2:
    case 3:
      answer = "low";
      break;

    case 4:
    case 5:
    case 6:
      answer = "medium";
      break;

    case 7:
    case 8:
    case 9:
      answer = "high";
      break;

    default:
      answer = "Unknown";
  }

  return answer;
}

// Note Returning boolean values from functions
function isLess(a, b) {
  return a < b;
}

// Note Returning early pattern from funcyions
function abTest(a, b) {
  if (a < b) {
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Note Build javascript object
var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  Friends: ["Everybody", "Anybody"],
};

// Note Accessing object properties with dot notation
var testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

// Note Accessing object properties with bracket notation
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

// Note Accessing object properties with variables
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "unitas",
};

var playerNumber = 16;
var player = testObj[playerNumber];

// Note Updating object property

var ourCat = {
  name: "Puss",
  legs: 4,
  tails: 1,
  friends: ["everybody"],
};
ourCat.name = "Puss in boots";

// Note Add new properties to an object
var ourBird = {
  name: "",
  legs: 2,
  friends: ["everybody"],
};
ourBird.wings = 2;
ourBird["name"] = "tweety";

// Note Delte properties from an object
var ourFish = {
  name: "nemo",
  color: "orange",
  tail: 1,
};
delete ourFish.tail;

// Note Using objects for lookups
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicage",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Freak",
  };
  result = lookup[val];
  return result;
}

// Note Testing object properties
var myObj = {
  gitf: "pony",
  pet: "kitten",
  bed: "sleigh",
};
function checkObj(val) {
  if (myObj.hasOwnProperty(val)) {
    return myObj[val];
  }
  return "Not Found";
}
checkObj("pet");

// Note Manipulating Complex object
var myMusic = [
  {
    artist: "billy joel",
    title: "Pinao Man",
    release_year: 1973,
    fromats: ["CD", "8T", "LP"],
    gold: true,
  },
  // new record here
  {
    artist: "Burno Mars",
    title: "Grenade",
    release_year: "2000s",
    fromats: ["CD", "Mp3", "youtube video "],
    gold: true,
  },
];

// Note Accessing nested objects
var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};
var gloveBoxContents = myStorage["car"]["inside"]["glove box"];

// Note Accessing nested array
var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

var secondTree = myPlants[1].list[1];

// Note Record Collection
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5499: {
    artist: "ABBA Gold",
  },
};

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }

  return collection;
}

// updateRecords(5499, "artist", "?????");
// var collectionCopy = JSON.parse(JSON.stringify(collection));
// console.log(
//   "%c 🚳: reusableFunction -> collectionCopy ",
//   "font-size:16px;background-color:#146ae8;color:white;",
//   collectionCopy
// );

// Note Iterate with while loops
var myWhileLoop = [];
var i = 0;
while (i < 5) {
  myWhileLoop.push(i);
  i++;
}

// Note Iterate with for loops
var myForLoop = [];
for (var i = 0; i < 5; i++) {
  myForLoop.push(i);
}

// Note Iterate odd numbers with a for loop
var oddForLoop = [];
for (var i = 1; i <= 9; i += 2) {
  oddForLoop.push(i);
}

//Note Count backwards with a for loop
var oddForLoop = [];
for (var i = 5; i >= 0; i--) {
  oddForLoop.push(i);
}

//Note Iterate through an Array with a for loop
var numberArray = [1, 2, 3, 4, 5];
var sumArray = 0;
for (var i = 0; i < numberArray.length; i++) {
  sumArray += numberArray[i];
}

// Note Nesting loops

function multiplyAll(arr) {
  var product = 1;

  for (var x = 0; x < arr.length; x++) {
    for (var y = 0; y < arr[x].length; y++) {
      product *= arr[x][y];
    }
  }

  return product;
}

var product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

// Note Iterate with do...while loops
var myDoLoop = [];
var i = 10;
do {
  myDoLoop.push(i);
  i++;
} while (i < 5);

// Note generate random functions
function randomFraction() {
  return Math.random();
}

// Note generate random whole number
function randomWholeNum() {
  return Math.floor(Math.random() * 21);
}

// Note Generate random whole numbers within a range
function rangedRandon(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Note Use the parseInt function
function convertToNumber(str) {
  return parseInt(str);
}

// Note Use the parseInt function with a Radix
function convertBinaryStringToNumberDecimal(str) {
  return parseInt(str, 2);
}

// Note Use the conditional (ternary) operator
function checkEqual(a, b) {
  return a === b ? "They are the same" : "Nope";
}

// Note Use multiple conditional (ternary) operatiors
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

//Note Compare scopes of the var and let keywords
function checkScopeVar() {
  "use strict";

  var i = "function scope";

  if (true) {
    var i = "block scope";
    console.log(
      "%c 🍔: Block scope VAR i is: ",
      "font-size:16px;background-color:#f5accc;color:black;",
      i
    );
  }
  console.log(
    "%c 🍔🍔: Function scope VAR i is: ",
    "font-size:16px;background-color:#f5accc;color:black;",
    i
  );
}
function checkScopeLet() {
  "use strict";

  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log(
      "%c 🍔: Block scope LET i is: ",
      "font-size:16px;background-color:#f5accc;color:black;",
      i
    );
  }
  console.log(
    "%c 🍔🍔: Function scope LET i is: ",
    "font-size:16px;background-color:#f5accc;color:black;",
    i
  );
}
//checkScopeVar()
//checkScopeLet()

// Note const keyword
function updateConst(str) {
  const SENTENCE = "HELLO";
  SENTENCE += ", " + str; //const variables can't be changed
  return SENTENCE;
}
//updateConst("John");

// Note  Mutate an Array declared with const
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  //s = [2, 5, 7];  //Don't do this
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();

// Note Prevent object mutation
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14,
  };

  Object.freeze(MATH_CONSTANTS); // freeze function

  try {
    MATH_CONSTANTS = 99;
  } catch (ex) {
    console.log(
      "%c 🈂️: freezeObj -> ex ",
      "font-size:16px;background-color:#09a819;color:white;",
      ex
    );
  }
  return MATH_CONSTANTS.PI;
}
//freezeObj()

// Note arrow function
var magicFunction = function () {
  return new Date();
};
// vs
var magicArrowFunction = () => new Date();

// Note Write arrow functions with parameters
var myConcatFunction = function (arr1, arr2) {
  return arr1.concat(arr2);
};
//vs
var myConcatArrowFunction = (arr1, arr2) => arr1.concat(arr2);

// Note Write higher order arrow functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 8, 8.34, -2, "4", "zero", "John Doe"];
const squareList = (arr) => {
  const squaredIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((num) => num * num);
  return squaredIntegers;
};

// Note Write higher order arrow functions, defailt parameter
const increment1 = (function () {
  return function increment2(number, value = 1) {
    return number + value;
  };
})();

// Note Rest operator
const sumRest = (function () {
  return function sum(...args) {
    console.log(
      "%c 🎐: sum -> args ",
      "font-size:16px;background-color:#6b71c7;color:white;",
      args
    );
    return args.reduce((a, b) => a + b, 0);
  };
})();

// Note Use spread operator to evaluate arrays in place
const arrSpread1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arrSpread2;
(function () {
  arrSpread2 = [...arrSpread1];
  arrSpread1[0] = "potato";
})();

// Note Use destructuring assignment to assign variables from objects
const AVG_TEMPERATURE = {
  today: 77.5,
  tomorrow: 79,
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";

  const { tomorrow: tempOfTomorrow } = avgTemperatures;
  return tempOfTomorrow;
}

// Note Destruction assignment with nested objects

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 },
};

function getMaxOfTmrw(forecast) {
  "use strict";

  const {
    tomorrow: { max: maxOfTomorrow },
  } = forecast;

  return maxOfTomorrow;
}

// Note Destructuring assignment to assign variables from arrays
const [z, x, , y] = [1, 2, 3, 4, 5, 6];
// console.log(z, x, y);

let aDes8 = 8,
  bDes6 = 6;

(() => {
  "user strict";
  [aDes8, bDes6] = [bDes6, aDes8];
})();
// console.log(aDes8);
// console.log(bDes6);

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
  const [, , ...arr] = list;

  return arr;
}
const source2 = removeFirstTwo(source);
// console.log(source);
// console.log(source2);

//Note Use destructuring assignment to pass an object as a function's parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const half = (function () {
  return function half({ max, min }) {
    return (max + min) / 2.0;
  };
})();
// console.log(stats);
// console.log(half(stats));

//Note Create string using template literals
const person = {
  name: "Zodiac Hasbro",
  age: 56,
};
const greeting = `Hello, my name is ${person.name}. I am ${person.age} years old.`;

// Note Write concise object literal declarations using simple fields
const createPerson = (name, age, gender) => ({ name, age, gender });

// Note write consise declarative functions
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  },
};

bicycle.setGear(3);
// console.log(bicycle.gear);

// Note Use class syntax to define a constructor function
function makeClass() {
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
// console.log(carrot.name);

// Note User getters and setters to control access to an object
function makeBookClass() {
  class Book {
    constructor(author) {
      this._author = author;
    }
    //getter
    get writer() {
      return this._author;
    }
    //setter
    set writer(author) {
      this._author = author;
    }
  }

  return Book;
}

const Book = makeBookClass();
const shield_hero = new Book();
shield_hero.writer; // displays: undefined
shield_hero.writer = "aneko yusagi";
shield_hero.writer; // displays: "aneko yusagi"
