// let arr = ["Steven", "Mary", "Simone", "Ari", "McKay", "James"];
// let arrReverse = arr.slice().reverse(); // create new array with slice
// let arrReverse2 = [...arr].reverse(); // create new array with spread operator
// console.log(arrReverse);
// console.log(arrReverse2);

// let arr = ["Steven", "Mary", "Simone", "ari", "McKay", "James"];
// let arr2 = [15, -10, 500, 43, -25, 0, 323, 112];

// arrSorted = [...arr].sort(); // "ari" will be last because of lower case
// arrSortedAllLower = arr.map((v) => v.toLowerCase()).sort(); // all lower case then sort

// console.log(arr);
// console.log(arrSorted);
// console.log(arrSortedAllLower);

// let compareNum = function (a, b) {
//   // if (a < b) {
//   //   return -1;
//   // } else if (a > b) {
//   //   return 1;
//   // } else {
//   //   return 0;
//   // }
//   return a < b ? -1 : a > b ? 1 : 0;
// };

// let arr2Sorted = arr2.slice().sort(); // not good
// let arr2Sorted2 = arr2.slice().sort(compareNum); // callback functions sorts them properly
// let arr2Sorted3 = arr2.slice().sort((a, b) => a - b); // shortest way
// let arr2Sorted3Descending = arr2.slice().sort((a, b) => b - a); // shortest way

// console.log(arr2Sorted);
// console.log(arr2Sorted2);
// console.log(arr2Sorted3);
// console.log(arr2Sorted3Descending);

// let compareString = function (a, b) {
//   let x = a.toLowerCase();
//   let y = b.toLowerCase();

//   if (x < y) return -1;
//   if (x > y) return 1;
//   return 0;
// };

// let arrStrSorted = [...arr].slice().sort();
// let arrStrSortedCompared = [...arr].slice().sort((a, b) => {
//   let x = a.toLowerCase();
//   let y = b.toLowerCase();

//   if (x < y) return -1;
//   if (x > y) return 1;
//   return 0;
// });

// console.log(arrStrSorted);
// console.log(arrStrSortedCompared);


// let arr = [{
//   firstName: "Steven",
//   lastName: "Hancock",
//   score: 90
// },{
//   firstName: "Lynette",
//   lastName: "Jorgensen",
//   score: 100
// },{
//   firstName: "Andrew",
//   lastName: "Wilson",
//   score: 71
// },{
//   firstName: "Annika",
//   lastName: "Turner",
//   score: 82
// }];

// // sort by higher score
// let arrSorted = [...arr].slice().sort(function(a,b) {
//   if (a.score < b.score) return 1;
//   if (a.score > b.score) return -1;
//   return 0;
// })

// let arrSortedArrow = [...arr].slice().sort((a,b) => (a.score < b.score) ? 1 : (a.score > b.score) ? -1 : 0)

// console.log(arr);
// console.log(arrSorted);
// console.log(arrSortedArrow);


// let arr = [1,2,3,4,5,6];
// let arr2 = ["four","five","six"];

// console.log(arr);

// let returnArray1 = [...arr].splice(2,2);
// let returnArray2 = [...arr].splice(4);
// let returnArray3 = arr.splice(3,3,...arr2);
// let returnArray4 = arr.splice(0,1,"a","b"); // add two return 1


// console.log(returnArray1); // returns [3,4];
// console.log(returnArray2); // returns [5,6];
// console.log(returnArray3); // returns [4,5];
// console.log(returnArray4); // returns [4,5];
// console.log(arr); // returns [1, 2, 3, "four", "five", 6]

// let arr = [1,2,3,4,5,6,7,8];

// // arr.copyWithin(2,0,2); // returns [1,2,1,2,5,6,7,8]

// // arr.copyWithin(1,2,3); // returns [1,3,3,4,5,6,7,8]

// // arr.copyWithin(2,0) // returns [1,2,1,2,3,4,5,6]

// arr.copyWithin(3,-1); // returns [1,2,3,8,5,6,7,8]
// arr.copyWithin(0,5,6); // returns [6,2,3,8,5,6,7,8]

// console.log(arr);

let arr = ["Steven","Mary","Simone","Ari","McKay","James"];

// let arr2 = arr; // just creates a new reference to the same array
// arr2.sort();

let arrSort = [...arr];
arrSort.sort();

let arrReverse = Array.from(arr);
arrReverse.reverse();

console.log(arr);
console.log(arrSort);
console.log(arrReverse);
