//To complete this exercise, finish all 7 steps.

//1. Create an empty array and assign it to a variable.

let arr1 = [];

//2. Add 5 numbers to the array using push or unshift.

arr1.push(1,2,3,4,5);

//3. Display the length of the array.

console.log(arr1.length);

//4. Take the value associated with index 3, multiply it by 10 and then place it back into index 3.

let idx3 = arr1[3] * 10;
// arr1.fill(idx3, 3, 4);
arr1[3] = idx3;

console.log(idx3);
console.log(arr1);

//5. Create a function addItem that will add the value passed in to the end of the array you created in step 1.

const addItem = (arr,val) => arr.push(val);

//6. Create a function getItem that will remove a value from the start of the array you created in step 1.

const getItem = (arr) => arr.shift();

//7. Test both functions.

addItem(arr1,30);
getItem(arr1);
console.log(arr1);
