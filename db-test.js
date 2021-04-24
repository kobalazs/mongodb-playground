const mongoose = require('mongoose');

(() => {
  const uri = 'mongodb+srv://admin:123qwe@cluster0.myhqz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('connected to db');
    db.close();
  });
})();
