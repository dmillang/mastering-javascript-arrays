//Convert this string to an array. Then create a new array that doesn't include any of the articles (a, an, the).

let stmt = "The best part of a sunset is the muted color that appears in anticipation of the deep reds, oranges and golds that will hopefully come later.";

// let stmtArr = stmt.toLowerCase().replace("."," ").split(" ").filter((val) => val !== "the").filter((val) => val !== "a").filter((val) => val !== "an");

// let stmtArr = stmt.toLowerCase().split(" ").filter((val) => {
//   if (val !== "the" && val !== "a" && val !== "an") {
//     return val;
//   }
// });
// console.log(stmtArr);

// let noArticles = stmt.split(" ").filter(function(val) {
//   return !/\ba\b|\ban\b|\bthe\b/i.test(val);
// });

let noArticles = stmt.split(" ").filter((val) => !/\ba\b|\ban\b|\bthe\b/i.test(val));

console.log(noArticles);
