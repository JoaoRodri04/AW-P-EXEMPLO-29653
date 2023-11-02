const authRouter = require('express').Router();
const controller = require('../../controllers/v2/auth');

authRouter.post('/signin', controller.signin);
authRouter.post('/sinup', controller.signup);

module.exports = authRouter;