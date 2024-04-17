const express = require('express');
const router = express.Router();
var bodyParser = require("body-parser");


//load the model
//const Item = require('../../')

//add a new item
router.post('/', (req,res) => {
    Item.create(req.body)
        .then((item) => res.json({msg: 'Item added successfully'}))
        .catch((err) => res.status(400).json({error:'unable to add this item'}));
});

//get a specific item
router.get('/:id', (req,res) => {
    Item.findById(req.params.id)
        .then((item) => res.json(item))
        .catch((err) => res.status(404).json({ noitemfound: "no item found" }));
});

//get the list of items
router.get('/', (req,res) => {
    Item.find()
        .then((item) => res.json(item))
        .catch((err) => res.status(404).json({ noitemfound: "no item found" }));
});

// @route GET api/items/:id
//update a specific item
router.put ('/:id', (req,res) => {
    Item.findByIdAndUpdate(req.params.id, req.body)
        .then((item) => res.json({ msg: 'Updated successfully'}))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' }));
});

//delete a specific item
router.delete('/:id', (req,res) => {
    Item.findByIdAndDelete(req.params.id)
        .then((item) => res.json({mgs: 'Item Entry Deleted Successfully'}))
        .catch((err) => res.status(404).json({ error: 'No such item' }));
});


module.exports=router;