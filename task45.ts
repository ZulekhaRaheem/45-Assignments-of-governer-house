// Task:45:Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function make_car (car: string,color:string,established: string):void{
    console.log("{'Manufacturer:' " .concat(car), "'color:'" .concat(color), "'Established:'"
    .concat(established));
 }

 make_car ("'Honda,'","'Black',","'1995'}");
 make_car ("'Subaru'","'white'","'1993'}");
 export{}