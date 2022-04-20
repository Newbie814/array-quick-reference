//To complete this exercise, finish all 7 steps.

//7. Test both functions.

//1. Create an empty array and assign it to a variable.
let emptyArray = [];

//2. Add 5 numbers to the array using push or unshift.
emptyArray.push(3, 4, 5);
emptyArray.unshift(1, 2);

console.log(emptyArray);

//3. Display the length of the array.

console.log(emptyArray.length);

//4. Take the value associated with index 3, multiply it by 10 and then place it back into index 3.
emptyArray[3] = emptyArray[3] * 10;

// let newValue = emptyArray[3] * 10;
// emptyArray[3] = newValue;
// console.log(emptyArray);

//5. Create a function addItem that will add the value passed in to the end of the array you created in step 1.
const addElement = (array, newValue) => {
  return array.push(newValue);
};

addElement(emptyArray, 6);
console.log(emptyArray);

//6. Create a function getItem that will remove a value from the start of the array you created in step 1.
const removeFirstElement = (array) => {
  return array.shift();
};

removeFirstElement(emptyArray);
console.log(emptyArray);
