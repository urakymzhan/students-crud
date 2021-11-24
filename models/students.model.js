let students = require('../db/students');
let helper = require('../utils/helper');

// Get all students
function getStudents() {
  return new Promise((resolve, reject) => {
    if (students.length === 0) {
      reject({
        message: '0 students to show',
        status: 202,
      });
    }
    resolve(students);
  });
}

// Get student by id
function getStudent(id) {
  /**
   * use of mustBeInArray() function inside helper file to check if student is in students array
   * resolve with student
   * catch and reject with error
   */
}

// Insert student
function addStudent(student) {
  /**
   * use of getNewId() function inside helper file to get a new id for new student
   * resolve with new student
   * catch and reject with error
   */
}

function updateStudent(id, newStudent) {
  /**
   *  use of mustBeInArray() function inside helper file to check if student is in students array
   * resolve with updated student
   * catch and reject with error
   * You can use findIndex() to find a student and update its values from students array
   * Ex:  const index = students.findIndex((s) => s.id == parseInt(student.id));
   */
}

// Delete student by id
function deleteStudent(id) {
  /**
   *  use of mustBeInArray() function inside helper file to check if student is in students array
   * resolve with students except deleted student
   * catch and reject with error
   * You can use filter() to delete a student from students array
   * Ex: students = students.filter((s) => s.id !== parseInt(id));
   */
}

module.exports = {
  getStudents,
  getStudent,
  deleteStudent,
  addStudent,
  updateStudent,
};
