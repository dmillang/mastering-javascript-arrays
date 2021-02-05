// // let obj = {
// //     "name": "Steven"
// // };

// // obj.lastName = "Hancock"

// // obj["score"] = 100;

// // obj[10] = 10;

// // let x = "complete";

// // obj.x = true;

// // obj[x] = true;

// let i = {x: 10},
//     j = {y: 20},
//     obj2 = {};

// obj2[i] = 100;
// obj2[j] = 5;

// let map = new Map();

// map.set(i,100);
// map.set(j,5);

// // console.log(map);

// // map.delete(i);

// // console.log(map);
// // console.log(map.size);

// // console.log(map.get(j));

// // map.clear();

// let arrMap = Array.from(map);
// let arrMap2 = [...map];

// console.log(arrMap);
// console.log(arrMap2);

// console.log(map.keys());
// console.log(map.values());

// let arrMapKeys = [...map.keys()];
// console.log(arrMapKeys);

// let arrMapValues = [...map.values()];
// console.log(arrMapValues)

let arr = [1,2,3,4,5,6,5,4,7];

let set = new Set(arr);

let setArr = [...set];

// set.add(100);
// set.add(5);
// set.add(100 );

console.log(set);   
console.log(set.size);
console.log(setArr.length);