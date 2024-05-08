//Task 16:More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner. 
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestList = ["Nani,", "Alishba api,", "Sonia,", "Saima mami,"];
var message = "My dear ";
console.log(" ".concat(message, guestList[0], "I would like to invite you to dinner at home."));
console.log(" ".concat(message, guestList[1], "I would like to invite you to dinner at home."));
console.log(" ".concat(message, guestList[2], "I would like to invite you to dinner at home."));
console.log("\n");
console.log("Sorry, ".concat(guestList[2], "you cannot attend the dinner."));
console.log("\n");
console.log(" ".concat(message, guestList[0], "I would like to invite you to dinner at home."));
console.log(" ".concat(message, guestList[1], "I would like to invite you to dinner at home."));
console.log(" ".concat(message, guestList[3], "I would like to invite you to dinner at home."));
console.log("\n");
console.log("We got a bigger table. ");
console.log("\n");
var insertnewGuest = "Alia";
var insertinmiddlenewGuest = "Sania";
var appendnewGuest = "fauzia";
console.log(" ".concat(message, insertnewGuest), "I would like to invite you to dinner at home");
console.log(" ".concat(message, guestList[0]), "I would like to invite you to dinner at home");
console.log(" ".concat(message, insertinmiddlenewGuest), "I would like to invite you to dinner at home");
console.log(" ".concat(message, guestList[1], "I would like to invite you to dinner at home."));
console.log(" ".concat(message, guestList[3], "I would like to invite you to dinner at home."));
console.log(" ".concat(message, appendnewGuest), "I would like to invite you to dinner at home");
console.log("\n");
