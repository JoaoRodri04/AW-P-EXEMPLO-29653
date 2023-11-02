const router = require('express').Router();
const authRouter = require('./auth');
const studentRouter = require('./students');
const schoolsRouter = require('./schools');
const coursesRouter = require('./courses');

router.use('/auth', authRouter);
router.use('/students', studentRouter);
router.use('/schools', schoolsRouter);
router.use('/courses', coursesRouter);

module.exports = router;