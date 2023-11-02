const schoolsRouter = require('express').Router();
const controller = require('../../controllers/v2/schools');
const authMiddleware = require('../../middlewares/auth');

schoolsRouter.use(authMiddleware);
//schoolss CRUD
schoolsRouter.get('/', controller.getAll); //read all
schoolsRouter.get('/:id', controller.getById); //read one by his id (schools number)
schoolsRouter.post('/create', controller.create); //create new schools
schoolsRouter.put('/update', controller.update); //update schools
schoolsRouter.delete('/delete/:id', controller.delete); //delete schools

module.exports = schoolsRouter;