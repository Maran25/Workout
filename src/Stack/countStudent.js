/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let isCycle = 0;

  while (students.length) {
    if (isCycle === students.length) break;
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      isCycle = 0;
    } else {
      isCycle++;
      let student = students.shift();
      students.push(student);
    }
  }
  return students.length;
};

countStudents(
  [0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
  [0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0]
);
