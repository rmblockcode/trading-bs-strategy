const boom = require('@hapi/boom');

function validatorHandler (schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data , { abortEarly: false });
    if (error) {
      // Call error handlers
      next(boom.badRequest(error));
    }
    // Continue with the normal workflows
    next();
  }
}

module.exports = validatorHandler;
