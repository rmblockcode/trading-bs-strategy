const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://127.0.0.1:3000'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin ) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed'));
    }
  }
}

app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Welcome to RMBLOCKCODE API for BS Strategy');
})

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Listening in port: ', port);
})
