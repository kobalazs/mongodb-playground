const router = require('express').Router();

const Task = require('../models/task');

router.get('/', async (req, res, next) => {
  res.json(await Task.find());
});

router.post('/', async (req, res, next) => {
  const task = new Task({ name: 'Test Task' });
  res.json(await task.save());
})

module.exports = router;
