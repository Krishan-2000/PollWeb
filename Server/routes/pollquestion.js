const express = require('express');
const route= express.Router();
const mongoose = require('mongoose');
const {PollQuestion,validatepollquestion} = require('../models/pollQuestion');


route.post('/createpoll',async(req,res)=>{
    try{
        console.log(req.body);
        const pollquestion = new PollQuestion (req.body);
        const createpollquestion = await pollquestion.save();
        res.status(201).send(createpollquestion);
    }
    catch(error){
        console.log(error);
        res.status(400).send(error);
    }
});

module.exports = route;