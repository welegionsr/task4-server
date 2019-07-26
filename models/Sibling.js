const mongoose = require('mongoose');

const siblingSchema = mongoose.Schema({
    name: {type: String, required: true},
    nickname: {type: String, required: true},
    description: {type: String, required: true},
    siblingId: {type: Number, required: true}
});

const Sibling = mongoose.model('sibling', siblingSchema);
module.exports = {
    Sibling
}