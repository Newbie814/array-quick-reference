let arr1 = [1, 'two', true, null, undefined, { name: 'John' }, [1, 2, 3]];

// to access particular element, specify array and put index in brackets
// arr1[5] would be the object at index 5 above

// attempting to access an index that doesn't exist will return undefined

console.log(arr1[5]);

// same is used to assign new values to indexes
arr1[2] = 'three'; // reassigns the value at index 2 from boolean true to string 'three'
console.log(arr1);

// assigning a new value to an index that doesn't exist will create a new index

arr1[7] = 'seven';
console.log(arr1); //'seven' is now at newly created index 7

// if new index assigned is beyond the end of the current array, empty indexes are created until the end of the array

// sparse arrays have many indexes with a no value assigned to them

// let arr1 = [,,,,,,,,,,,,,,,,,,,,,,,,,,,]
// let arr1 = ['matt', 1, 3,,,,,,,,,,,,,,,,,,,,,, 'bob']
