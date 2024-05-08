// Task 42:Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified

function show_magicians (magiciansnames: string):void{
    console.log(" " .concat(magiciansnames));
}
  var magic = ["Harry Houdini","Doug Henning","Dai Vernon"];
   show_magicians (magic.toString());

  function  make_great (great: string): void{
    console.log(" " .concat(great),"the great magician");
  }
  var magic3 = ["Harry Houdini"];
  var magic4 = ["Doug Henning"];
  var magic5 = ["Dai Vernon"];
 make_great (magic3.toString());
  make_great (magic4.toString());
  make_great (magic5.toString());
