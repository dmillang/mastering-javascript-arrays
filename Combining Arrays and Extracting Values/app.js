// let stmt =
//   "The best part of a sunset is the muted color that appears in anticipation of the deep reds, oranges and golds that will hopefully come later.";

// let words = stmt.split(" ");

// console.log(words.join(" "));

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let str = arr.join();

// console.log(str);

// let array1 = [5, 10, 15, 20, 25],
//   array2 = [2, 4, 6, 8, 10, 12],
//   array3 = ["abc", "def", "ghi", "jkl"];

// // let newArray = [...array1,...array2,...array3, 1, 3, 4, 5];

// let newArray = array3.concat(array1, array2, [0, -1, -2, -3]);

// console.log(newArray);

// let array1 = [5, 10, 15, 20, 25, 30, 35, 40];

// let newArray = array1.slice(3,5); // returns [20,25]

// let newArray2 = array1.slice(2);

// let newArray3 = array1.slice();

// console.log(array1);
// console.log(newArray);
// console.log(newArray2);
// console.log(newArray3);

// let test = function() {
//   // console.log(arguments);
//   let argArray = Array.prototype.slice.call(arguments);
//   console.log(argArray);
//   console.log(Array.isArray(argArray));
// };

// test(1,2,3);

// let array1 = [
//   [5, 10],
//   [15, 20],
//   [25, 30, 35, 40],
// ];

// let newArray = array1.flat();

// console.log(newArray);

let strArray = ["The best part of a sunset", "is the muted color that appears", "in anticipation", "of", "the deep reds, oranges and golds that will hopefully come later."];

let strArraySplit = strArray.flatMap(val => val.split(" ")).join(" ");

console.log(strArray);
console.log(strArraySplit);