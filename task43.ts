//Task no 43:Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name

function show_magicians2 (magiciansnames: string):void{
    console.log(" " .concat(magiciansnames));
}
  var magic = ["Harry Houdini","Doug Henning","Dai Vernon"];
   show_magicians2 (magic.toString());

  function  make_great2 (great: string): void{
    console.log(" " .concat(great),"the great magician");
  }
  console.log("Great Magicians");
  var magic3 = ["Harry Houdini"];
  var magic4 = ["Doug Henning"];
  var magic5 = ["Dai Vernon"];
 make_great2 (magic3.toString());
  make_great2 (magic4.toString());
  make_great2 (magic5.toString());

  console.log("\n")

  console.log("Original magicians");
   show_magicians2 (magic3.toString());
   show_magicians2 (magic4.toString());
   show_magicians2 (magic5.toString());

   console.log("\n")