// Section 1

// I. Variables & Datatypes

// A. Q + A

// How do we assign a value to a variable?
let firstName = "Ramzi";
// How do we change the value of a variable?
firstName = "karkoub";
// How do we assign an existing variable to a new variable?
let newVariable = firstName;
// Remind me, what are declare, assign, and define?
Declare: " create avariable using var, let or const";
Assign: "give a value to a variable";
Define: "Combining declaration and assignment";
// What is pseudocoding and why should you do it?
pseudocoding: "write the scope of work in plain text as a comment, describe the step that will do to inpliment the solution";
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
let answer =
  "think about the question and how to impliment it for maybe 60% and im pliment it in coding: 40%";

//   B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
let firstVariable;
// Assign it the value of the string "Hello World"
firstVariable = "Hello World";
// Change the value of this variable to some number
firstVariable = "Wazuuuup!!!";
// Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;

// Change the value of secondVariableto any string.
secondVariable = "Yooo! Wazuuuuuup!!!";
// What is the value of firstVariable?
("Wazuuuup!!!");
// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean
let myName = "Ramzi Karkoub";
let newName = `Hello, my name is ${myName}`;

// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b); // true
console.log(c > d); // true
console.log("Name" === "Name"); // true
console.log(true || false); // true
console.log(false || false || false || false || false || true); // true
console.log(false === false); // true
console.log(e === "Kevin"); // true
console.log(a + b === c); // true
console.log(a * a === d); // true
console.log(48 == "48"); // true

// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
let animal = "cow";
if (animal === "cow") {
  console.log("mooooo");
} else {
  console.log("Hey! You're not a cow.");
}

// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
let age = 18;
if (age >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// Write a loop that will print out all the numbers from 10 up to and including 400
for (let i = 10; i <= 400; i++) {
  console.log(i);
}
// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i = 12; i <= 4000; i += 3) {
  console.log(i);
}

// B. Get even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + " <-- is an even number");
  } else {
    console.log(i);
  }
}

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0 && i !== 0) {
    console.log("I found a " + i + ". High five!");
  }
}
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0 && i !== 0) {
    console.log("I found a " + i + ". High five!");
  }
  if (i % 3 === 0 && i !== 0) {
    console.log("I found a " + i + ". Three is a crowd");
  }
}

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
let bank_account = 0;
for (let i = 1; i <= 10; i++) {
  bank_account += i;
}
console.log(bank_account);
// Check your work! Your bank_account should have $55 in it.
console.log("$", bank_account);
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
bank_account = 0;
for (let i = 1; i <= 100; i++) {
  bank_account += i * 2;
}
console.log(bank_account); // Should print 10100

// A. Talk about it:
// What are the things in an array called?
let question1 = "they are acalled elements";
// Do Arrays guarantee those things will be in order?
question1 = "yes";
// What real-life thing could you model with an array?
question1 = "name of student in perscholas class or to do list";

// Create an array that contains three quotes and store it in a variable called quotes
const quotes = ["variable1", "variable2", "variable3"];

// Accessing elements
// Given the following array
const randomThings = [1, 10, "Hello", true];

// How do you access the 1st element in the array?
console.log(randomThings[0]);
// Change the value of "Hello"to "World"
randomThings[2] = "World";
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);

// D. Change values
// Given the following array
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// What would you write to access the 3rd element of the array?
console.log(ourClass[2]);
// Change the value of "Github" to "Octocat"
ourClass[4] = "Octact";
// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);

// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.
// Given the following array:
const myArray = [5, 10, 500, 20];

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon", "Ramzi");
console.log(myArray);
// Remove the 5from the beginning of the array.
myArray.splice(-1);
console.log(myArray);
// Add the string "Bob Marley"to the beginning of the array.
myArray.shift("Bob Marley");
console.log(myArray);
// Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
myArray.reverse();
console.log(myArray);
console.log(
  "yes, i mutated the array. mutating the array means changin it by reversing the order instead of creating a new array that is reversed "
);

// F. Biggie Smalls
// Create a variable that contains an integer.
let number = 15;
// Write an if ... elsestatement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.
if (number < 100) {
  console.log("little number");
} else {
  console.log("big number");
}

// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:
number = 5;
if (number < 5) {
  console.log("little number");
} else if (number > 100) {
  console.log("Big number");
} else {
  console.log("monkey");
}
// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[3] + " today!");
// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
let thomShirt = thomsCloset[0][0];
console.log(thomShirt);
// In the same way, access one item from Thom's pants array.
let thomPants = thomsCloset[1][1];
console.log(thomPants);
// Access one item from Thom's accessories array.
let thomAccessory = thomsCloset[2][1];
console.log(thomAccessory);
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(
  "Thom is looking fierce in a " +
    thomShirt +
    ", " +
    thomPants +
    " and " +
    thomAccessory +
    "!"
);
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);

// IV. Functions

// A. printGreeting
// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?

// Like so?

// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!
const printNameFunction = (nameToPrint) => {
  console.log(`hi my name is ${nameToPrint}`);
};
printNameFunction("ramzi");

// B. printCool
// Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.
// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";
const printCool = (x) => {
  console.log(`${x} is cool`);
};
printCool("Captain Ramzi");

// C. calculateCube
// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.

function calculateCube(num) {
  return num * num * num;
}
console.log(calculateCube(5));

// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
function isVowel(char) {
  const vowels = "aeiou";
  const lowerCaseTheChar = char.toLowerCase();
  return vowels.includes(lowerCaseTheChar);
}
console.log(isVowel("a"));
console.log(isVowel("A"));
console.log(isVowel("C"));
console.log(isVowel("E"));
console.log(isVowel("b"));

// E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
function lengthF(a, b) {
  return [a.length, b.length];
}
console.log(lengthF("ramzi", "karkoub"));

// F. getMultipleLengths
// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

function getMultipleLengths(arr) {
  return arr.map((el) => el.length);
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
function maxOfThree(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}
console.log(maxOfThree(6, 9, 1));

// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
const printLongestWord = (x) => {
  let longest = x[0];
  for (let i = 1; i < x.length; i++) {
    if (x[i].length > longest.length) {
      longest = x[i];
    }
  }
  return longest;
};

console.log(
  printLongestWord([
    "BoJack",
    "Princess",
    "Diane",
    "a",
    "Max",
    "Peanutbutter",
    "big",
    "Todd",
  ])
);

// Objects
// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
const user = {
  name: "Ramzi Karkoub",
  email: "Ramzi@karkoub.com",
  age: 30,
  purchased: [],
};

// B. Update the user
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
user.email = "ramzi2@karkoub.com";
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
// Increment age
user.age++;
console.log(user);

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
// Add location
user.location = "charlotte, NC";

// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
user.purchased.push("carbohydrates");
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
user.purchased.push("peace of mind");
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
user.purchased.push("Merino jodhpurs");
// Console.log just the "Merino jodhpurs" from the purchasedarray.
console.log(user.purchased[2]);

// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
// If we want to give our user a friendwith a nameand age, we could write:
// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// When we console.log user, we would see the friendobject added to our user object.
// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
  name: "Grace Hopper",
  age: 85,
  location: "Charlotte",
  purchased: [],
};
// Console.log just the friend's name
console.log(user.friend.name);
// Console.log just the friend's location
console.log(user.friend.location);
console.log(user);
// CHANGE the friend's age to 55
user.friend.age = 55;
// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
user.friend.purchased.push("The One Ring");
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
user.friend.purchased.push("A latte");
// Console.log just "A latte" from the friend's purchasedarray.
console.log(user.friend.purchased[1]);
console.log(user);
// F. Loops
// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
for (let item of user.purchased) {
  console.log(item);
}
// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
for (let item of user.friend.purchased) {
  console.log(item);
}

// G. Functions can operate on objects
// Write a single function updateUserthat takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a returnstatement, it will merely modify the user object.
const updateUser = () => {
  user.age++;
  user.name = user.name.toUpperCase();
};
updateUser();
console.log(user);

// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.
const oldAndLoud = (person) => {
  person.age++;
  person.name = person.name.toUpperCase();
};
oldAndLoud(user);
console.log(user);

// Cat Combinator
// 1. Mama cat
// Define an object called cat1that contains the following properties:

// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed
const cat1 = {
  name: "Joe",
  breed: "Mog",
  age: 19,
};
console.log(cat1.age);
console.log(cat1.breed);

// 2. Papa cat
// Define an object called cat2that also contains the properties:

// name
// breed
// age (a number)
const cat2 = {
  name: "Jam",
  breed: "Siamese",
  age: 45,
};

//   3. Combine Cats!
// The cats are multiplying!

// Write a function combineCatsthat has two parameters mama, and papa. The function will take two arguments -- each a cat object.

// Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.
function combineCats(mama, papa) {
  return {
    name: mama.name + papa.name,
    age: 1,
    breed: mama.breed + "-" + papa.breed,
  };
}
console.log(combineCats(cat1, cat2));
