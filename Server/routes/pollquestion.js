const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
const { PollQuestion, validatepollquestion } = require('../models/pollQuestion');


route.post('/createpoll', async (req, res) => {
    try {
        console.log(req.body);
        const pollquestion = new PollQuestion(req.body);
        const createpollquestion = await pollquestion.save();
        res.status(201).send(createpollquestion);
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

route.get('/get_poll/:id', async (req, res) => {

    try {
        const _id = req.params.id;
        const pollquestion = await PollQuestion.findById(_id);
        if (!pollquestion) {
            return res.status(404).send('No Poll Found');
        }
        else {
            res.status(200).send(pollquestion);
        }
    }
    catch (e) {
        res.status(400).send(e);
    }
});

module.exports = route;