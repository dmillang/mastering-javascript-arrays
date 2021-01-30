// let arr = [3, 15, 25, 6, 8, 12];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] *= 5;
// }
// console.log(arr);

// const arr = [3,7,10,50,7];
// for (const key in arr) {
//   console.log(key);
//   console.log(arr[key]);
// }

const arr = [1,2,3,4,5];
let total = 0;

for (const val of arr) {
  total += val;
}
console.log(total);