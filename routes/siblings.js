var express = require('express');
var router = express.Router();
const {Sibling} = require('../models/Sibling');

/* GET all siblings */
router.get('/', async function(req, res, next) {
  const siblings = await Sibling.find().exec();
  res.send(siblings);
});

module.exports = router;
