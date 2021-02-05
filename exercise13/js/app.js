/*
Below you will find two arrays that contain student names. Combine these two arrays together into a new array and remove any duplicates. 

To make this problem a bit more difficult, there are case differences in some of the names. To eliminate that problem map to new arrays before combining and eliminating duplicates.
*/

let studentsA = ["James", "Annika", "Cameron", "AntoniO", "Kaylie", "Gabriel", "Emily", "sarah"];

let studentsB = ["LJ", "Brianna", "David", "Antonio", "Kelsey", "Joshua", "Emily", "Sarah"];

let studentsTotal = Array.from(new Set([...studentsA,...studentsB].map((std) => std.toLowerCase())));
// console.log(studentsTotal);

studentsTotal.forEach((val,idx,arr) => arr[idx] = val.charAt(0).toUpperCase() + val.slice(1));

console.log(studentsTotal);
