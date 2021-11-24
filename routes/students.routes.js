const express = require('express');
const router = express.Router();
const studentsModel = require('../models/students.model');

/**
 * Get New Student Form
 */
router.get('/new', (req, res) => {
  /**
   * Render 'new-student' tempalte
   */
});

/**
 * Get All students
 */
router.get('/', async (req, res) => {
  try {
    let students = await studentsModel.getStudents();

    if (!students) {
      res
        .status(students.status)
        .render('students', { message: students.message });
    }
    res.status(200).render('students', { students });
  } catch (err) {
    res.status(500).render('students', { message: err.message });
  }
});

/**
 * Get Single Student by id
 */
router.get('/:id', async (req, res) => {
  const id = req.params.id;

  /**
   * Render 'students' tempalte with single student
   * Use 'studentsModel.getStudent(id)' function from models folder
   * Catch errors
   */
});

/* add a new student */
router.post('/new', async (req, res) => {
  /**
   * Render 'new-student-success' tempalte with new student
   * Don't forget to use 'req.body' to retrieve a data
   * Use 'studentsModel.addStudent(req.body)' function from models folder
   * Catch errors
   */
});

/**
 * Get student for update
 */
router.get('/edit/:id', async (req, res) => {
  const id = req.params.id;
  /**
   * Render 'edit-student' tempalte with single student
   * Use 'studentsModel.getStudent(id)' function from models folder
   * Catch errors
   */
});

/**
 * Update Student by id
 */
router.put('/edit/:id', async (req, res) => {
  const id = req.params.id;
  /**
   * Render 'edit-student-success' tempalte with single student
   * Don't forget to use 'req.body' to retrieve a data
   * Use 'studentsModel.updateStudent(id, req.body)' function from models folder
   * Catch errors
   */
});
/**
 * Delete Student by id
 */
router.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;
  /**
   * Render 'delete-student' tempalte with deleted students id
   * Don't forget to use 'req.body' to retrieve a data
   * Use 'studentsModel.deleteStudent(id)' function from models folder
   * Catch errors
   */
});

module.exports = router;
