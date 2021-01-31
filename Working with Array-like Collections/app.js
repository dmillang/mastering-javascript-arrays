// let arr = [1, 2, 3];

// let obj = {
//     1: 'one',
//     2: 'two',
//     3: 'three'
// };

// for (let val of obj) {
//     console.log(val);
// };

// let map = new Map();
// map.set(1,'one');
// map.set(2,'two');
// map.set(3,'three');

// for (let val of map) {
//     console.log(val);
// };

// console.log(Array.isArray(arr)); // checks if it's an array by using a static method

// let divs = document.querySelectorAll('div');

// for (let val of divs) {
//     console.log(val);
// };

// var mapArray = [...map]; // spread operator
// var mapArray2 = Array.from(map); // static method
// console.log(mapArray);
// console.log(mapArray2);

// var mapDivs = [...divs];
// console.log(mapDivs);

// let obj2 = {
//     0: 'zero',
//     1: 'one',
//     2: 'two',
//     3: 'three',
//     length: 4
// };

// console.log(Array.from(obj2));

// let string = "hello there";
// let stringArr = Array.from(string);

// for (var i = 0; i < stringArr.length; i++) {
//   if (stringArr.indexOf(stringArr[i]) === 0) {
//     stringArr[i] = stringArr[i].toUpperCase();
//   } else if (stringArr[i] === " ") {
//     stringArr[i + 1] = stringArr[i + 1].toUpperCase();
//   }
// }

// const capitalizeWords = function (str) {
//     let string = str;
//     let stringArr = Array.from(string);

//   for (var i = 0; i < stringArr.length; i++) {
//     if (stringArr.indexOf(stringArr[i]) === 0) {
//       stringArr[i] = stringArr[i].toUpperCase();
//     } else if (stringArr[i] === " ") {
//       stringArr[i + 1] = stringArr[i + 1].toUpperCase();
//     } else {
//       stringArr[i] = stringArr[i].toLowerCase();
//     }

//     string = string.slice(1);
//     string += stringArr[i];
//   }

//   return string;

// };

// let sentence1 = capitalizeWords("new events coming");
// let sentence2 = capitalizeWords("about last week's results");

// console.log(sentence1);
// console.log(sentence2);

let str = "Natural language has no dominant paradigm, and neither does JavaScript. Developers can select from a grab bag of approaches--procedural, functional, and object-oriented--and blend them as appropriate.";

// let spreadArr = [...str];
// let fromArr = Array.from(str);

// console.log(spreadArr);
// console.log(fromArr);

// let strUpperG = "";
// for (let val of str) {
//   if (val === "a") {
//     strUpperG += val.toUpperCase();
//   } else {
//     strUpperG += val;
//   }
// }
// console.log(strUpperG);

// let str3 = "";
// for (i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toLowerCase()) {
//         str3 += str[i].toUpperCase();
//     } else {
//         str3 += str[i];
//     }
// }
// console.log(str3);

// let wordArray = str.split(" ", 10);
// let comaArray = str.split(",");
// let hyphenArray = str.split("-");
// let regexArray = str.split(/[,.]|--/);
// let str2 = "";
// for (const char of regexArray) {
//     str2 += char;
// }

// console.log(str);
// console.log(wordArray);
// console.log(comaArray);
// console.log(hyphenArray);
// console.log(regexArray);
// console.log(str2);

// let sumIt = function(...argumentsArr) {
//     //let argumentsArr = Array.from(arguments);
//     console.log(argumentsArr);
//     console.log(Array.isArray(argumentsArr));
// };
// sumIt(1,2,3,4,5,6);

// let scores = [14,34,56,72,83,98,103];

// let idx = 5;
// let idx2 = 3;

// console.log(scores);
// console.log(scores[idx]);
// console.log(scores[idx+1]);
// console.log(scores[5+1]);
// console.log(scores[idx2>idx ? 1 : 0]); // index value is 0 thus returns 14

let obj = {
    q1: 55,
    q2: 85,
    q3: 90,
    q4: 0
};

let objKeys = Object.keys(obj);
let objValues = Object.values(obj);
let objEntries = Object.entries(obj);

console.log(objKeys);
console.log(objValues);
console.log(objEntries);
console.log(objEntries[1][1]); // returns 85 as that's the value of the entry with index number 1 in the objEntries array
