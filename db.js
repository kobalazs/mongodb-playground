require('dotenv').config();
const mongoose = require('mongoose');
const Task = require('./models/task');

(() => {
  const uri = process.env.MONGODB_URI;
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', async () => {
    console.log('connected to db');

    const task = new Task({ name: 'Test Task' });
    await task.save();

    console.log(await Task.find());

    db.close();
  });
})();
