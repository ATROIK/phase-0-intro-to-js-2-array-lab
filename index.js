// ARRAYS & DATA STRUCTURES
// DATA STRUCTURE - means for associating and organising information
// ARRAY - a list with itms in a particular order surrounded by [ ] and seperated by ,
// elements in an array can be any JS data type including strings, numbers
// Arrays are ODERED so elements will always appear in the same order. The order goes according to an index, the first elemnt is always 0
// Arrays can be ASSIGNED TO A VARIABLE
// length of an array can be checked by using built-in length propert myArray.length
// Arrays provide organisation and we only need to remeber one identifier.
// Arrays are expressives, by putting elements in a shared datat structure we tell others these things are important
// BRACKET NOTATION - every element is assigned an index value. Use [] to access 
// ARRAY METHODS
// .push() - destructive, adds element to end of aray
// .unshift() - destructive, adds element to begining of aray
// SPREAD OPERATOR (not a method) - ... - spreads out elements of existing array into new array creating a copy. Original array POINTS TO A LOCATION IN MEMORY, using spread creates a SHALLOW COPY. This means that if you copy nested arrays, inner aray will STILL POINTS TO THE SAME LOCATION IN MEMORY AS THE ORIGINAL ARRAY, SO IF YOU MODIFY THE INNER ARRAY IT WILL ALSO CHANGE THE ORIGINAL AND VICE VERSA. Beter to use for non-nested arrays.
// SPREAD comes in handy when want to add one or more elements before or after elements in original array without mutating it. add new elelement start ['element',... 'array name'], end [array name, ...]
// REMOVE ELEMENTS FROM ARRAY (MEtHODS) - 
// .pop() - dont take arguments, removes single element, RETURNS element that is removed, is DESTRUCTIVE
// .pop() removes last element in aray
// .shift() - removes first element in aray

// .slice() - REMOVES ELEMENTS NON DESTRUCTIVELY (DOES NOT MUTATE ORIGINAL ARRAY)
// removes a porton, takes 0,1 or 2 arguments. if no arguments will return original array intact. I used this in first class functions lab to return first two and last two drivers.
// creates a shallow copy that points to a different object in memory to original. If you add element to to one, it DOES not get added to the other.
// Uses INDEX, where slice should begin and index BEFORE WHICH it should end. if no second argument it will run to end of array.

// .splice() - DESTRUCIVE - allows to remove, add or replace elements.
// First argument expected is index at which to begin. Mutates original array.
// Ca use negative index as with slice()
// If two arguments, second dictates how many elements we want to remove.
// REPLACE ELEMENTS with .splice() - eg, replace menu items in online menu.
// Can insert elements by by pasing 0 as second argument.
// BRACKET NOTATION TO REPLACE ELEMENTS - if only replacing one eements this is a simpler way to do it. 


  // SLICING AND SPREADING (NON DESTRUCTIVE) - combine to replace or ad in non destructive way
  

  //1. assigning array to newMenu using literal notation. 
  //2. inside [] spreading result of calling slice on menu with arguments 0 and 1.
  //3. then type in three new elements using argument 3. taking advantage of fact that slice() returns NEW ARRAY. we can spread the elements in new array same as with any other array

  const cats = ["Milo", "Otis", "Garfield"];
  
 function destructivelyAppendCat() {
    cats.push('Ralph')
 };

 function destructivelyPrependCat() {
    cats.unshift('Bob')
 };

 function destructivelyRemoveLastCat() {
    cats.pop()
 };

 function destructivelyRemoveFirstCat() {
    cats.shift()
 };

function appendCat() {
    return [...cats, 'Broom'];
};

function prependCat() {
    return ['Arnold', ...cats]
};

function removeLastCat() {
    return cats.slice(0 ,-1)
}

function removeFirstCat() {
    return cats.slice(-2)
}