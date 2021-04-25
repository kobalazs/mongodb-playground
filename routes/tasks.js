const router = require('express').Router();

const Task = require('../models/task');

router.get('/', async (req, res, next) => {
  res.json(await Task.find());
});

router.get('/:id', async (req, res, next) => {
  res.json(await Task.findById(req.params.id));
});

router.post('/', async (req, res, next) => {
  res.json(await Task.create(req.body));
})

router.patch('/:id', async (req, res, next) => {
  res.json(await Task.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete('/:id', async (req, res, next) => {
  res.json(await Task.findByIdAndDelete(req.params.id));
});

module.exports = router;
