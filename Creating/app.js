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
let scores = Array(10).fill(5);
let scores2 = [1, 2, 3, 4, 5, , , , ,].fill("fillIt!", 5, 100);

console.log(scores);
console.log(scores2);
