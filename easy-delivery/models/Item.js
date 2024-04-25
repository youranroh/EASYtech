const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    price: {
        type:String,
    },
    description: {
        type:String,
    },
    tag: {
        type: String,
    },
    img: {
        type: String,
    },
});

module.exports = Item = mongoose.model('item',ItemSchema);