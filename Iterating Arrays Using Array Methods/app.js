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

let scores = [80, 50, 0, 100, 90, 80, 75];

let passScores = scores.filter((val) => {
    return val >= 70;
});

let failScores = scores.filter((val) => {
    return val < 70;
});

console.log(scores);
console.log(passScores);
console.log(failScores);