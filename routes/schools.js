const schoolsRouter = require('express').Router();
const controller = require('../controllers/schools');

schoolsRouter.get('/', controller.getAll);
schoolsRouter.get('/:id', controller.getById);
schoolsRouter.post('/create', controller.create);
schoolsRouter.put('/update', controller.update);
schoolsRouter.delete('/delete', controller.delete);

module.exports = schoolsRouter;