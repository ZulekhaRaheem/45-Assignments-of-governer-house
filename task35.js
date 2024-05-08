//Task no 35:Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var different_animal = ['lion', 'tiger', 'leopard'];
for (var _i = 0, different_animal_1 = different_animal; _i < different_animal_1.length; _i++) {
    var animal = different_animal_1[_i];
    console.log(" ".concat(animal));
}
for (var _a = 0, different_animal_2 = different_animal; _a < different_animal_2.length; _a++) {
    var animal = different_animal_2[_a];
    console.log("The ".concat(animal), "eat animals");
}
console.log("They all eat animals");
