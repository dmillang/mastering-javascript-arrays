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

let string = "hello there";
let stringArr = Array.from(string);

for (var i = 0; i < stringArr.length; i++) {
  if (stringArr.indexOf(stringArr[i]) === 0) {
    stringArr[i] = stringArr[i].toUpperCase();
  } else if (stringArr[i] === " ") {
    stringArr[i + 1] = stringArr[i + 1].toUpperCase();
  }
}

const capitalizeWords = function (str) {
    let string = str;
    let stringArr = Array.from(string);

  for (var i = 0; i < stringArr.length; i++) {
    if (stringArr.indexOf(stringArr[i]) === 0) {
      stringArr[i] = stringArr[i].toUpperCase();
    } else if (stringArr[i] === " ") {
      stringArr[i + 1] = stringArr[i + 1].toUpperCase();
    }

    string = string.slice(1);
    string += stringArr[i];
  }

  return string;

};

let test = capitalizeWords("new events coming");

console.log(test);

console.log(stringArr);
console.log(string);
