//The processData function has several data structures being passed to it. Check to see if the data is an Array. If not convert it to an array and then return an array of those arrays. To check the returned value you can display the allArray variable.


// let processData = function(...arguments) {
//     let newArray = [];
//     for (const argument of arguments) {
//         let arr = Array.from(argument);
//         newArray.push(arr);
//     }
//     console.log(arguments);
//     console.log(newArray);
// };

let processData = function(...coll) {
    let newArray = [];

    for (let val of coll) {
        if (Array.isArray(val) === false) {
            newArray.push(Array.from(val));
        } else {
            newArray.push(val);
        }
    }
    
    return newArray;
};

