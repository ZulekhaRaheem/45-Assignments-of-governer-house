"use strict";
// Task 31:No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
Object.defineProperty(exports, "__esModule", { value: true });
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var username = [];
if (username.length == 0) {
    console.log("We need to find some users");
}
else {
    for (var _i = 0, username_1 = username; _i < username_1.length; _i++) {
        var users = username_1[_i];
        if (users === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(users), ", thankyou for logging in again");
        }
    }
}
