const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  color: String,
  position: Number,
  isDone: Boolean,
});

module.exports = mongoose.model('Task', schema);
