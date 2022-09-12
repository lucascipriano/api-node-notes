const AppError = require('../utils/AppError');

class usersController {
  create(request, response) {
    const { name, email, password } = request.body;
    if (!name) {
      throw new AppError('Nome obrigatório');
    }
    response.json({ name, email, password });
  }
}

module.exports = usersController;
