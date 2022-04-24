// //  Basics of iterating through arrays in javascript

// let arr = [3, 15, 25, 6, 8, 12];

// // for loop (initialization, (exit)condition, increment(how to change in subsequent loops))

// // take above and multiply each element by 5

// // i = 0 here to start at the beginning of the array. to start at the end of the array, i = arr.length - 1, for example

// // for (let i = 0; i < arr.length; i++) {
// //   arr[i] *= 5; // same as arr[i] = arr[i] * 5
// // }

// let students = [
//   'Steven',
//   'Lori',
//   'james',
//   'lynette',
//   'Arianna',
//   'McKay',
//   'witney',
// ];
// let newStudentsArray = [];
// for (let i = 0; i < students.length; i++) {
//   newStudentsArray.push(students[i].toLowerCase());
// }

// //let arr = [3, 15, 25, 6, 8, 12]; same as above
// // for of loop = loops over values of an array, doesn't provide access to index
// // the variable after let in parentheses is just a user chosen name to represent and store the individual values in the array

// let total = 0;

// for (let value of arr) {
//   total += value;
// }

// console.log(total);

// let methods = [
//   'map',
//   'filter',
//   'reduce',
//   'reduceRight',
//   'forEach',
//   'every',
//   'some',
// ];

// const divEl = document.getElementById('insertArray');

// for (let method of methods) {
//   divEl.innerHTML += `<li>${method}</li>`;
// }

// //  Array like objects

// let arr3 = [1, 2, 3];

// let obj = {
//   1: 'one',
//   2: 'two',
//   3: 'three',
// };

// for (let val of obj) {
//   console.log(val);
// } //the obj doesn't have an iterable and will throw an error

// let str = “To be nobody but
// yourself in a world
// which is doing its best day and night to make you like
// everybody else means to fight the hardest battle
// which any human being can fight and never stop fighting.”

let str =
  'To be nobody but yourself in a world which is doing its best day and night to make you like everybody else means to fight the hardest battle which any human being can fight and never stop fighting.';

let strArray = [...str];

console.log(strArray); //spaces are included as individal elements in the array
console.log(strArray.length); // 197

let strArray2 = Array.from(str);
console.log(strArray2);
console.log(strArray2.length); // 197

let str2 = '';

for (let character of str) {
  if (character === 'n') {
    str2 += character.toLocaleUpperCase();
  } else {
    str2 += character;
  }
}
console.log(str2); // note this for of loop was performed on the pure string and not one of the arrays I created.

//can also access individual elements of the string like an array.
console.log(str[6]); // n
