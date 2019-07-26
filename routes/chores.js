var express = require("express");
var router = express.Router();
const { Chore } = require("../models/Chore");
const {Sibling} = require('../models/Sibling');
const {ObjectID} = require('mongodb');

/* GET all chores */
router.get("/", async function(req, res, next) {
  const chores = await Chore.find().exec();
  const siblings = await Sibling.find().exec();
//   console.log({chores});
//   console.log({siblings});
  const data = chores.map((chore, i) => {
      const result = siblings.find(sibling => sibling._id.toHexString() === chore.siblingId);
      return {...chore._doc, siblingName: (result || {}).name};
  });
  res.send(data);
});

router.post('/', async function (req, res, next) {
    const {description, date, siblingId} = req.body;
    const chore = new Chore({description, date, siblingId});
    try {
        const document = await chore.save();
        res.status(200).send(document);
    } catch (e) {
         res.status(400).send(e);
    }
 });

module.exports = router;
