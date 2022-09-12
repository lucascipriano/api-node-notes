const { Router } = require('express');

const UsersController = require('../controllers/usersController');
const usersRoutes = Router();

function myMiddleware(request, response, next) {
  console.log('Passou pelo middleware');
  if (!request.body.isAdmin) {
    return response.json({ message: 'User unauthorized' });
  }
  next();
}

const usersController = new UsersController();

usersRoutes.post('/', myMiddleware, usersController.create);

module.exports = usersRoutes;
