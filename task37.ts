// Task no 37:Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt (size: string, message: string ): void {
    console.log("I order a " .concat(size),"t-shirt");
    console.log("It will say " .concat(message));
 }

 make_shirt ('large' ,'"i love typescript"');
  make_shirt ('medium', '"i need knowledge"');
  make_shirt ('small' ,'"i love to do coding"');