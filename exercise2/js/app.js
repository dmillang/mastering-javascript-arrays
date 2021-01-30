//Use a for loop to create a new array (lStudents) that contains the same names, but convert the names to lowercase.

let students = ["Steven", "Lori", "james", "lynette", "Arianna", "McKay", "witney"];

let lStudents = [];

for (let i = 0; i < students.length; i++) {
  lStudents[i] = students[i].toLowerCase();
}

console.log(lStudents);