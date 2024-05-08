//Task 18:Seeing the World: Think of at least five places in the world you’d like to visit.

//• Store the locations in a array. Make sure the array is not in alphabetical order.
var visitplaces =['Makkah','Madinah','Paris','Pakistan tour','Maldives','America','IceLand,'];

//• Print your array in its original order.
console.log("Original Order:",[visitplaces]);

//• Print your array in alphabetical order without modifying the actual list
console.log("Alphabetical Order",[...visitplaces].sort());

//• Show that your array is still in its original order by printing it
console.log("Original Order:",[visitplaces]);

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Alphabetical reversed Order",[...visitplaces].sort().reverse());

//• Show that your array is still in its original order by printing it again.
console.log("Original Order:",[visitplaces]);

//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reversed Order",[...visitplaces].reverse());

// Reverse the order of your list again. Print the list to show it’s back to its original order.
visitplaces.reverse();
console.log("Reversed order: ", visitplaces);

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sorted Order",[...visitplaces].sort());

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("sorted reversed Order",[...visitplaces].sort().reverse());