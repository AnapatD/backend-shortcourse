const express = require('express');
const { getStudent, getAllStudents, addStudent, editStudent, deleteStudent } = require('../Controller/student');
const router = express.Router();

router.get('/student', getAllStudents);
router.get('/student/:id', getStudent);
router.post('/student', addStudent);
router.put('/student/:id', editStudent);
router.delete('/student/:id', deleteStudent);

module.exports = router;