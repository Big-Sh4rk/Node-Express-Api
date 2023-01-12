const express = require('express');
const userSchema = require("../models/user");

const router = express.Router();

// create user
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }))
});

// get all users

router.get('/users', (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }))
});

// get a user
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }))
});

// update a user
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = req.body;
    userSchema
    .findByIdAndUpdate(id, user)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }))
});

// delete a user
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .findByIdAndDelete(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }))
});

module.exports = router;