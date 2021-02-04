// let students = [
//     "Steven",
//     "Lynette",
//     "Kaylie",
//     "LJ",
//     "Joshua",
//     "Sarah",
//     "Emily",
//   ],
//   scores = [80, 90, 55, 60, 85, 95, 25, 100];

// let numLoc = scores.indexOf(25);
// let numLoc2 = scores.indexOf(400);

// let strLoc = students.indexOf("LJ");

// console.log(numLoc);
// console.log(numLoc2);
// console.log(strLoc);

// if (scores.indexOf(100) > -1) {
//   console.log("Array contains 100");
// } else {
//   console.log("Array does NOT contain 100");
// }

// if (scores.includes(7) ? console.log(true) : console.log(false)); // false

// let arrCon = (arr) => (arr.includes(80) ? true : false);

// console.log(arrCon(scores)); // true
// console.log(arrCon(students)); // false

let scores = ["80", 90, "55", 60, 85, 95, 25, "100"];

let topScore = scores.find((val) => {
  return val == 100;
});

console.log(topScore);

let users = [{name: "Steve", q1: 45, q2: 85}, {name: "Ignacio", q1: 100, q2: 100}, {name: "Alvin", q1: 95, q2: 100}, {name: "Brianna", q1: 100, q2: 85}, {name: "Andrea", q1: 75, q2: 95}];

let both = users.find((val) => {
  return val.q1 === 100 && val.q2 === 100;
});

console.log(both);
