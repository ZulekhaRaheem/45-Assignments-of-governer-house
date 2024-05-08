//   Task no 32:  Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["Sana", "alia", "sakina", "Zara", "amna"];
var new_userss = ["Samaina", "sakina", "amna", "Erica", "alia"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_userss_1 = new_userss; _i < new_userss_1.length; _i++) {
    var new_users = new_userss_1[_i];
    if (current_users_lower.indexOf(new_users.toLowerCase()) !== -1) {
        console.log("Sorry ".concat(new_users), "that username is taken😌");
    }
    else {
        console.log("Welcome ".concat(new_users), "to our website 🎉");
    }
}
