// let arr = [3, 15, 25, 6, 8, 12],
//     total = 0;

// for (let val of arr) {
//     total += val;
// };

// arr.forEach((val) => {
//     total += val
// });

// console.log(total);

// arr.forEach(function(val, idx, arr) {
//     arr[idx] = val * val;
// });

// console.log(arr);

// let objArr = [{
//     firstName: "Steven",
//     lastName: "Hancock",
//     score: 90,
//     pass: null
// },{
//     firstName: "Lynette",
//     lastName: "Jorgensen",
//     score: 100,
//     pass: null
// },{
//     firstName: "Andrew",
//     lastName: "Wilson",
//     score: 69,
//     pass: null
// },{
//     firstName: "Annika",
//     lastName: "Turner",
//     score: 82,
//     pass: null
// }];

// objArr.forEach((val) => {
//     if (val.score >= 70) {
//         val.pass = true;
//     } else {
//         val.pass = false;
//     }
// });

// let passArr = objArr.filter((val) => {
//     if (val.pass === true) {
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log(passArr);

// let arr = [3, 15, 25, 6, 8, 12];

// let newArr = arr.map((val, idx, theArray) => {
//     console.log(val, idx, theArray);
//     return val * val
// });
// console.log(newArr);

// let objArr = arr.map((val, idx, theArray) => {
//     console.log(val, idx, theArray);
//     return {val};
// });
// console.log(objArr);

// console.log(arr);

// let scores = [80, 50, 0, 100, 90, 80, 75];

// let passScores = scores.filter((val) => {
//     return val >= 70;
// });

// let failScores = scores.filter((val) => {
//     return val < 70;
// });

// console.log(scores);
// console.log(passScores);
// console.log(failScores);

// let scores = [80, 50, 0, 100, 90, 80, 75];

// let sum = scores.reduce((acc, val) => {
//   return acc + val;
// }, 0);

// console.log(sum);

// let objs = [{ firstName: "Steven" }, { lastName: "Hancock" }, { score: 85 }];

// let combinedObjs = objs.reduce((acc,val)=>{
//     return Object.assign(acc,val);
// },{});

// console.log(combinedObjs);
// let scores = [80, 50, 0, 100, 90, 80, 75];
// let results = scores.every((val) => val > 0); // returns one value of true or false (in this case false bc there's an element that is equal or less than zero)
// console.log(results);
// const isBelowThreshold = (currentValue) => currentValue < 40;
// const array1 = [1, 30, 39, 29, 10, 13];
// console.log(array1.every(isBelowThreshold));
// // expected output: true

// let str = "the answer is 1956.";
// let splitStr = str.replace("."," ").split(" ").some((val) => val === "1956");
// console.log(splitStr);

let nums = new Set([1,2,"3",4,"5"]);

let numsArray = Array.from(nums, function (val) {
  if (typeof val === 'string') {
    return Number(val);
  } else {
    return val;
  }
});

console.log(numsArray); 