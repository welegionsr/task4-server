var express = require("express");
var router = express.Router();
const { Chore } = require("../models/Chore");

/* GET all chores */
router.get("/", async function(req, res, next) {
  const chores = await Chore.find().exec();
  res.send(chores);
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
