/*
Below are two arrays of strings. Split each string so that individual words are elements in an array. Make sure to flatten each array, and then combine them into a single array with strArray1 coming first. Once that is done, convert the array to a string and display the resulting sentence.
*/

let strArray1 = ["Arrays are important", "data structures for any", "language"],
  strArray2 = ["and", "should be mastered", "in", "JavaScript."];

// let splitArray = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].split(" ");
//   }
// };

// splitArray(strArray1);
// splitArray(strArray2);

// const flatStrArray1 = strArray1.flat();
// const flatStrArray2 = strArray2.flat();

// let jointArr = flatStrArray1.concat(flatStrArray2).join(" ");

// console.log(flatStrArray1);
// console.log(flatStrArray2);
// console.log(jointArr);

let flatArr1 = strArray1.concat(strArray2).flatMap((val) => val.split(" ")).join(" ");

let flatArr2 = [...strArray1.flatMap((val) => val.split(" ")),...strArray2.flatMap((val) => val.split(" "))].join(" ");

console.log(flatArr1);
console.log(flatArr2);