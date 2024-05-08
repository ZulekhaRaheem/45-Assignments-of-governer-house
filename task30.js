// Task no 30:Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var username = ["admin", "Sana", "Sania", "eric", "hala"];
for (var _i = 0, username_1 = username; _i < username_1.length; _i++) {
    var users = username_1[_i];
    if (users === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(users), ", thankyou for logging in again");
    }
}
