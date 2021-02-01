
let arr = ["Steven", "Mary", "Simone", "Ari", "McKay", "James"];

let arrReverse = arr.slice().reverse(); // create new array with slice
let arrReverse2 = [...arr].reverse(); // create new array with spread operator

console.log(arr);
console.log(arrReverse);
console.log(arrReverse2);