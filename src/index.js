// This is an in-line comment.
/* This is a
multi-line comment. */
var myName;
// Setup
var a;
a =7;
// Only change code below this line
// Setup
var a;
a = 7;
var b;
b=a;
// Only change code below this line
var a =9;
var myFirstName = "Alex";
var myLastName = "stain";
// Only change code below this line
var a=5;
var b=10;
var c="I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
 studlyCapVar= 10;
 properCamelCase= "A String";
 titleCaseOver= 9000;
 let catName = "Oliver";
 let catSound = "Meow!";
 const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line
const sum = 10 + 10;
const difference = 45 - 33;
const product = 8 * 10;
const quotient = 66 / 33;
let myVar = 87;

// Only change code below this line
myVar++;
let myVar = 11;

// Only change code below this line
myVar--;
const ourDecimal = 5.7;

// Only change code below this line
var myDecimal=8.7;
const product = 2.0 * 2.5;
const quotient = 4.4 / 2; // Change this line
var remainder = 8%3;
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *=3 ;
c *= 10;
let a = 48;Local Scope and Functions

let c = 33;

a /= 12;
b /= 4;
c /= 11;
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
const myStr = "This is the start."+" This is the end."; // Change this line
let myStr = "This is the first sentence.";
myStr +=" This is the second sentence.";
// Only change code below this line
const myName = " Alen";
const myStr = "hi,"+myName +" stain";
// Change code below this line
const someAdjective = "codeforce is awsome";
let myStr = "Learning to code is ";
myStr +=someAdjective;
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
console.log(lastName.length);
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[3]; 
const lastLetter = lastName[lastName.length - 1];

// Change this line
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[6];
const thirdToLastLetter = secondToLastLetterOfLastName[secondToLastLetterOfLastName.length - 3];

 // Change this line
 const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";

// Only change code above this line
// Only change code below this line
const myArray = ["hi", 9];
// Only change code below this line

const myArray = [50, 60, 70];
var myData =myArray[0];
// Setup
const myArray = [18, 64, 99];
myArray[0]=45;
myArray[1]=64;
myArray[2]=99;
// Only change code below this line
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];
  // Setup
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
// Only change code below this line
// Setup
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop()

// Only change code below this line
// Setup
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();
// Only change code below this line
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35])

// Only change code below this line
var myList = [
    ["Canned Beans", 3],
    ["Milk Galon", 1],
    ["Cereal", 2],
    ["Toilet Paper", 12],
    ["Sack of Rice", 1]
  ];
  function reusableFunction() {
    console.log("Hi World");
  }
  
  // Call the function
  reusableFunction();
  
var a,b;
function functionWithArgs(a, b){
  console.log(a+b);
}
functionWithArgs(1,2);
functionWithArgs(7,9);
function timesFive(a){
    return (5*a);
  }
  timesFive(5);
  timesFive(2);
  timesFive(0);
// Declare the myGlobal variable below this line
let myGlobal=10;
let oopsGlobal;
function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal=5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
function myLocalScope() {
    // Only change code below this line
    let myVar;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
   let outerWear ="sweater";
  // Only change code above this line
  return outerWear;
}
 myOutfit();
 // Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line


// Only change code above this line
function addFive(){
  sum =sum+5;
}
addThree();
addFive();
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
\function nextInLine(arr, item) {
    // Your code here
    arr.push(item);
    var removed = arr.shift();
    return removed; // Change this line
  }
  
  // Setup
  const testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
  function welcomeToBooleans() {
    // Only change code below this line
  
    return true; // Change this line
  
    // Only change code above this line
  }
  function trueOrFalse(wasThatTrue) {
    // Only change code below this line
  if (wasThatTrue){
    return "Yes, that was true";
  }
  return "No, that was false";
  
  
    // Only change code above this line
  
  }
// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);  
// Setup
function testStrict(val) {
    if (val===7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);
  // Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");
// Setup
function testNotEqual(val) {
    if (val !=99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);
// Setup
function testStrictNotEqual(val) {
    if (val !==17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);
  function testGreaterThan(val) {
    if (val>100) {  // Change this line
      return "Over 100";
    }
  
    if (val>10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);  
  function testGreaterOrEqual(val) {
    if (val >=20) {  // Change this line
      return "20 or Over";
    }
  
    if (val >=10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);  
  function testLessThan(val) {
    if (val < 25) {  // Change this line
      return "Under 25";
    }
  
    if (val < 55 ) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);
  function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);  
  function testLogicalOr(val) {
    // Only change code below this line
  
    if (val) {
      return "Outside";
    }
  
    if (val) {
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);  
  function testLogicalOr(val) {
    // Only change code below this line
  
    if (val <=9 || val >=21) {
      return "Outside";
    
    
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);
  function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }
  
    else{
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else {
      return "Between 5 and 10";
    }
  }
  
  // Change this value to test
  testElseIf(7);  
  function orderMyLogic(val) {
    if (val > 10) {
      return "Greater than or equal to 10"
    } else if (val < 5) {
      return "Less than 5";
    } else {
      return "Less than 10";
    }
  }
  
  orderMyLogic(7); 
  function testSize(num) {
    // Only change code below this line
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
    // Only change code above this line
  }  

  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

  function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1) {
      return names[0];
    } else if (strokes <= par - 2) {
      return names[1];
    } else if (strokes === par - 1) {
      return names[2];
    } else if (strokes === par) {
      return names[3];
    } else if (strokes === par + 1) {
      return names[4];
    } else if (strokes === par + 2) {
      return names[5];
    } else {
      return names[6];
    }
    // Only change code above this line
  }
  
  // Change these values to test
  golfScore(5, 4);  
  function caseInSwitch(val) {
    switch (val) {
      case 1:
        return "alpha";
        break;
      case 2:
        return "beta";
        break;
      case 3:
        return "gamma";
        break;
      case 4:
        return "delta";
        break;
    }
  }
  
  // Change this value to test
  caseInSwitch(1); 
  function switchOfStuff(val) {
    var answer = "";
  
    switch (val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
    }
  
    return answer;
  }  
 function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";  
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1) 
  function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
      case 1:
      answer = "There is no #1";
      break; 
     case 99:
      answer = "Missed me by this much!";
      break;   
     case 7:
      answer = "Ate Nine";
      break;   
    }
    // Only change code above this line
    return answer;
  }
  
  chainToSwitch(7); 
  function isLess(a, b) {
    // Only change code below this line
      return a <= b;
    // Only change code above this line
  }
  
  isLess(10, 15);  
// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
      return undefined;
    }
  
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  // Change values below to test your code
  abTest(2, 2);  
  let count = 0;

  function cc(card) {
    // Only change code below this line
    switch (card){
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
       count++;
       break;
      case 10:
      case 'J':
      case 'Q':
      case 'K':
      case 'A':
       count--;
       break; 
    }
     if(count>0){ 
      return count+ " Bet";
    }
    else{
      return count+ " Hold";
    }
  
    // Only change code above this line
  }
  
  cc(2); cc(3); cc(7); cc('K'); cc('A');  
  const myDog = {
    // Only change code below this line
    name : "john",
    legs :4,
    tails :1,
    friends :["bob", "rock"]
  
  
    // Only change code above this line
  }; 
// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Change this line 
// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  const entreeValue = testObj["an entree"];   // Change this line
  const drinkValue = testObj["the drink"];    // Change this line  
// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj[playerNumber];   // Change this line  
// Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog.name ="Happy Coder";
  // Only change code below this line
  const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog.bark = "bow-wow";
// Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  delete myDog.tails;
  // Only change code below this line
  function phoneticLookup(val) {
    var result = "";
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
  // After converting our case statements into object properties you can make use of the variable `result` to let the function return the correct value.
  
  
    result = lookup[val];
    // Only change code above this line
    return result;
  }
  function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
  }
  const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      artist: "Deep Purple",
      title: "Smoke on the water",
      release_year: 1976,
      formats: ["CD", "8T", "LP"]
    }
    ];  
    const myStorage = {
        "car": {
          "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
           },
          "outside": {
            "trunk": "jack"
          }
        }
      };
      
      var gloveBoxContents = myStorage.car.inside["glove box"];
      const myPlants = [
        {
          type: "flowers",
          list: [
            "rose",
            "tulip",
            "dandelion"
          ]
        },
        {
          type: "trees",
          list: [
            "fir",
            "pine",
            "birch"
          ]
        }
      ];
      
      const secondTree = myPlants[1].list[1];  
// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if (value === '') {
      delete records[id][prop];
    } else if (prop === 'tracks') {
      records[id][prop] = records[id][prop] || []; // this is called shortcircuit evaluation, see below for explanation
      records[id][prop].push(value);
    } else {
      records[id][prop] = value;
    }
    return records;
  }
  // Setup
const myArray = [];

// Only change code below this line
var i = 5;
while(i >= 0) {
  myArray.push(i);
  i--;
}\
// Setup
const myArray = [];

// Only change code below this line
for (var i = 1; i <=5; i++) {
  myArray.push(i);
}
// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}
      
             
  
  
  