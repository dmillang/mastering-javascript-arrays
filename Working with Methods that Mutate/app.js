// let arr = ["Steven", "Mary", "Simone", "Ari", "McKay", "James"];
// let arrReverse = arr.slice().reverse(); // create new array with slice
// let arrReverse2 = [...arr].reverse(); // create new array with spread operator
// console.log(arrReverse);
// console.log(arrReverse2);

let arr = ["Steven", "Mary", "Simone", "ari", "McKay", "James"];
let arr2 = [15, -10, 500, 43, -25, 0, 323, 112];

arrSorted = [...arr].sort(); // "ari" will be last because of lower case
arrSortedAllLower = arr.map((v) => v.toLowerCase()).sort(); // all lower case then sort

console.log(arr);
console.log(arrSorted);
console.log(arrSortedAllLower);

let compareNum = function (a, b) {
  // if (a < b) {
  //   return -1;
  // } else if (a > b) {
  //   return 1;
  // } else {
  //   return 0;
  // }
  return a < b ? -1 : a > b ? 1 : 0;
};

let arr2Sorted = arr2.slice().sort(); // not good
let arr2Sorted2 = arr2.slice().sort(compareNum); // callback functions sorts them properly
let arr2Sorted3 = arr2.slice().sort((a, b) => a - b); // shortest way
let arr2Sorted3Descending = arr2.slice().sort((a, b) => b - a); // shortest way

console.log(arr2Sorted);
console.log(arr2Sorted2);
console.log(arr2Sorted3);
console.log(arr2Sorted3Descending);

let compareString = function (a, b) {
  let x = a.toLowerCase();
  let y = b.toLowerCase();

  if (x < y) return -1;
  if (x > y) return 1;
  return 0;
};

let arrStrSorted = [...arr].slice().sort();
let arrStrSortedCompared = [...arr].slice().sort((a, b) => {
  let x = a.toLowerCase();
  let y = b.toLowerCase();

  if (x < y) return -1;
  if (x > y) return 1;
  return 0;
});

console.log(arrStrSorted);
console.log(arrStrSortedCompared);
