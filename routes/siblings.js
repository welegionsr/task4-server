var express = require('express');
var router = express.Router();
const {Sibling} = require('../models/Sibling');

/* GET all siblings */
router.get('/', async function(req, res, next) {
  const siblings = await Sibling.find().exec();
  res.send(siblings);
});

router.get('/:id', async function(req, res, next) {
  const {siblingId} = req.params;
  const sibling = await Sibling.findOne({siblingId}).select({name: 1, nickname: 1, _id: 0}).exec();
});

module.exports = router;
