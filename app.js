const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users.js');
const cardsRouter = require('./routes/cards.js');

mongoose.connect('mongodb://localhost:27017/aroundb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const app = express();
const { PORT = 3000 } = process.env;

app.listen(PORT);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: '5f86d0d5d0da74439ac7955e',
  };
  next();
});

app.use('/cards', cardsRouter);
app.use('/users', usersRouter);

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Requested resource not found' });
});
