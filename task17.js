//Task 17:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
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
console.log("Sorry, we can only invite two people to dinner.");
console.log("\n");
console.log("Sorry, ".concat(insertnewGuest), "you cannot be invited at dinner");
console.log("Sorry, ".concat(appendnewGuest), "you cannot be invited at dinner");
console.log("Sorry, ".concat(insertinmiddlenewGuest), "you cannot be invited at dinner");
console.log("Sorry, ".concat(guestList[3]), "you cannot be invited at dinner");
console.log("\n");
console.log("My dear, ".concat(guestList[0]), "you are invted at dinner");
console.log("My dear, ".concat(guestList[1]), "you are invted at dinner");
console.log("\n");
delete (guestList[0]);
delete (guestList[1]);
console.log("\n");
console.log(guestList[0]);
console.log(guestList[1]);
