const mongoose = require("mongoose");
const { Sibling } = require("./Sibling");

const choreSchema = mongoose.Schema({
  description: { type: String, required: true },
  date: { type: Date, required: true },
  siblingId: {
    type: String,
    required: true,
    validate: {
      async validator(siblingId) {
        const siblings = await Sibling.find().exec();
        return siblings.find(sibling => sibling.siblingId === siblingId);
      },
      message: props => `${props.value} is NOT a part of this family!`
    }
  }
});

const Chore = mongoose.model("chore", choreSchema);
module.exports = {
  Chore
};
