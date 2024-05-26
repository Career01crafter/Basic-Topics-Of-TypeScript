//ARRAY:
//Array is used to store multiple values in a single variable.
//If we want to console single value then we just do indexing in console of it.
var animals = ["cat", "dog", "Cow", "Lion"];
console.log(animals[2]); //Indexing
animals.pop(); //delete last value
console.log(animals);
animals.push("camel"); //add value at last
console.log(animals);
animals.shift(); //delete first value
console.log(animals);
animals.unshift("tiger"); //add value at first
console.log(animals);
var slicedarray = animals.slice(1, 3); //delte values which are not define here
console.log(slicedarray);
animals.splice(0, 2);
console.log(animals);
