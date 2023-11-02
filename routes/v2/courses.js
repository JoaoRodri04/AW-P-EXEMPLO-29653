const coursesRouter = require('express').Router();
const controller = require('../../controllers/v2/courses');
const authMiddleware = require('../../middlewares/auth');

coursesRouter.use(authMiddleware);
//coursess CRUD
coursesRouter.get('/', controller.getAll); //read all
coursesRouter.get('/:id', controller.getById); //read one by his id (courses number)
coursesRouter.post('/create', controller.create); //create new courses
coursesRouter.put('/update', controller.update); //update courses
coursesRouter.delete('/delete/:id', controller.delete); //delete courses

module.exports = coursesRouter;