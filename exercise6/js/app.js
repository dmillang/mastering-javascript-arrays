//Use one of the Array methods to count the number of 0s in this list of scores.

let scores = [80, 50, 0, 100, 90, 80, 75, 0, 0, 5, 65, 93];

let numZeros = scores.filter((val)=> val === 0).length;

console.log(numZeros);

// let zeroCnt = 0;

// scores.forEach((val) => {
//   if (val === 0) zeroCnt++;
// });

let zeroCnt = scores.reduce((acc,val) => (val === 0) ? acc + 1 : acc,0);

console.log(zeroCnt);