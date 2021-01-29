// /* literal */
// let arr1 = [];
// let arr5 = [,,,]; /* sparse array */
// let arr2 = [1, 2, 3, 4, true, "array", { one: 1 }, [3, 4]];

// /* constructor */
// let arr3 = new Array();
// let arr4 = new Array(10);
// let arr6 = new Array(1,2,3,4,5,true);

// /* method */
// let arr7 = Array.of(5);
// let arr8 = Array.of(5,3,8,true);

/* Array.fill() method */
// let scores = Array(10).fill(5);
// let scores2 = [1, 2, 3, 4, 5, , , , ,].fill("fillIt!", 5, 100);

// console.log(scores);
// console.log(scores2);

// /* Reading and writing */
// let arr9 = [1, 2, 3, 4, true, "array", { one: 1 }, [3, 4]];
// let arrElement = arr9[6];
// arr9[6] = "Max";

// /* Sparse Arrays */
// let arr10 = [1, 2, 3, 4, 5];
// arr10[20] = 19;
// arr10[14] = "fourteen";

// /* Length */
// let arr11 = [1,2,3,4,5];
// arr11[arr11.length] = 6;
// arr11.length = 20;

// let arr12 = [1,2,3,4,5,6,7];
// delete arr12[5]; // doesn't adjust elements, array keeps being the same length

let arr13 = [1,2,3,4,5,6,7,8];
let length = arr13.push(9,10,20); // returns length
console.log(length);
let value = arr13.pop(); // returns value
console.log(value);
console.log(arr13);




console.log(arr13);

