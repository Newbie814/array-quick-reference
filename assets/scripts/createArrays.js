// Array literal = easiest and most common way to define an array

let arr1 = [];

let arr2 = [1, 2, 3, 4];

// all data types can be stored in an array

let arr3 = [1, 'two', true, null, undefined, { name: 'John' }, [1, 2, 3]];

// Array is an object, itself

// array constructor

let arr4 = new Array();

// set array with defined length
let arr5 = new Array(5);

// below would achieve the same with array literal
let arr6 = [, , , , ,];

let arr7 = new Array(5, 6, 'matt', true);

// single parameter indicates length, multiple parameters indicate values in the array, at corresponding indexes

// Array.of()

let arr8 = Array.of(1); // array of length 1 with value of 1 at 0 index

// Array.fill() create array with prepopulated values
let scores = Array(10).fill(0); // array of 10 zeros, which could be changed later
let scores2 = [10, 1, 2, 3, 4, , , , , , ,].fill(0); // same as above, array literal is determined number of indexes, but fill(0) overwrites values

// .fill(0, 0, 3) value to be assigned is first parameter. next is what index to start with that assignment. last is how many indexes to assign
