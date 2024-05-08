// Task 25:More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
var number_1 = "1";
var number_2 = "2";
var number_3 = "1";
if (number_1 == number_2) {
    console.log("numbers are equal");
}
else {
    console.log("numbers are not equal");
}
if (number_1 == number_3) {
    console.log("numbers are equal");
}
else {
    console.log("numbers are not equal");
}
console.log("\n");
//• Tests using the lower case function
if (number_1 == number_3) {
    console.log("numbers are equal");
}
else {
    console.log("numbers are not equal");
}
console.log("\n");
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var number_1 = "18";
var number_2 = "40";
if (number_1 == "18") {
    console.log(" eligible for vote");
}
var number_1 = "18";
var number_2 = "40";
if (number_2 == "40") {
    console.log(" olders are eligible for votes");
}
console.log('\n');
//greater than and less than
var number_1 = "10";
var number_2 = "20";
if (number_2 < number_1) {
    console.log("less than");
}
else {
    console.log("greater than");
}
console.log('\n');
var number_1 = "10";
var number_2 = "20";
if (number_1 < number_2) {
    console.log("less than");
}
else {
    console.log("greater than");
}
console.log("\n");
//greater than and equal to
var boy_1 = "18";
var boy_2 = "14";
if (boy_1 <= boy_2) {
    console.log("younger");
}
else {
    console.log("older");
}
var number_1 = "3";
var number_2 = "5";
if (number_1 == number_2) {
    console.log("equal not");
}
else {
    console.log("equal to");
}
console.log("\n");
//• Tests using "and" and "or" operators
var age_1 = "20";
var age_2 = "18";
if (age_1 && age_2) {
    console.log("person is eligible for vote");
}
var age_1 = "20";
var age_2 = "18";
if (age_1 || !age_2) {
    console.log("person is not eligible for vote");
}
console.log("\n");
//• Test whether an item is in a array
var languages_1 = '("urdu") ("English") ("French") ("Hindi")';
if (languages_1.indexOf('English') !== -1) {
    console.log("English is  in an array");
}
var languages = '("urdu") ("English") ("French") ("Hindi")';
if (!!languages.indexOf("arabic")) {
    console.log("Arabic is not in an array");
}
