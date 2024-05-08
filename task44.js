//Task no 44:Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time
function make_sandwich(ingredients) {
    console.log("i am adding ".concat(ingredients), "to your sandwich");
}
var items = ["cheese", "chicken", "lettuce", "cucumber", "beef", "mayonise", "egg", "ketchup", "onion"];
console.log("i am making great sandwich for you");
make_sandwich(items[0]);
make_sandwich(items[1]);
make_sandwich(items[2]);
console.log("your sandwich is ready");
console.log('\n');
console.log("i am making great sandwich for you");
make_sandwich(items[3]);
make_sandwich(items[4]);
make_sandwich(items[5]);
console.log("your sandwich is ready");
console.log('\n');
console.log("i am making great sandwich for you");
make_sandwich(items[6]);
make_sandwich(items[7]);
make_sandwich(items[8]);
console.log("your sandwich is ready");
console.log('\n');
