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

// console.log(objArr);

let arr = [3, 15, 25, 6, 8, 12];

// let newArr = arr.map((val, idx, theArray) => {
//     console.log(val, idx, theArray);
//     return val * val
// });
// console.log(newArr);

let objArr = arr.map((val, idx, theArray) => {
    console.log(val, idx, theArray);
    return {val};
});

console.log(arr);
console.log(objArr);