const express = require('express');
const entryRouter = require('./entry.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/entries', entryRouter);
}

module.exports = routerApi;
