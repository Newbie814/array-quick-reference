// Basic methods

// .length() returns length of array
arr1 = [1, 'two', true, null, undefined, { name: 'John' }, [1, 2, 3]];
console.log(arr1.length); // 7

arr1[arr1.length] = 20; //would add 20 to the end of the array(the length value would automatically be after the last element because of the zero based index - the length of original array is 7, but the index of the last element is 6)

arr1.length = 20; // would reassign the length of the array to 20

// generally, you're going to just read .length and let javascript deal with changing the length based on what you add and delete

// delete keyword only works on objects

let arr2 = [1, 2, 3, 4];

delete arr2[1]; // deletes index 1. but leaves empty element at that index. arr2.length would remain the same

arr3 = [1, 'two', true, null, undefined, { name: 'John' }, [1, 2, 3]];
// push() adds to end of array, pop() removes last element
arr3.push(20); // adds 20 to the end of the array
console.log(arr3);

// can add multple consecutive elements/values at once

arr3.push(30, 40, 50); // adds 30, 40, 50 to the end of the array
console.log(arr3);

arr3.pop(); // removes last element

// also returns that removed value and can be stored in a variable
let removedValue = arr3.pop();
console.log(removedValue); //would return 40 here, as 50 was removed by the above .pop()

// ============== shift() and unshift() ==============

// similar to push() and pop() but affects first element of array. Unlike push() and pop(), shift() and unshift() will change the index of existing values

arr4 = [1, 2, 3, 4];
arr4.unshift(0); // adds 0 to the beginning of the array
console.log(arr4);

arr4.shift(); // removes first element
console.log(arr4);
// ================== Exercises ==================

//To complete this exercise, finish all 7 steps.

//1. Create an empty array and assign it to a variable.

//2. Add 5 numbers to the array using push or unshift.

//3. Display the length of the array.

//4. Take the value associated with index 3, multiply it by 10 and then place it back into index 3.

//5. Create a function addItem that will add the value passed in to the end of the array you created in step 1.

//6. Create a function getItem that will remove a value from the start of the array you created in step 1.

//7. Test both functions.
