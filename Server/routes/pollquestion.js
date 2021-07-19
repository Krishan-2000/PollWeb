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

route.get('/result/:id',async(req,res)=>{
    try{
        const _id=req.params.id;
        const polldata=await PollQuestion.findById(_id);
        console.log(polldata);
        if(!polldata){
            return res.status(404).send("No result page");
        }
        else
        {
            res.status(200).send(polldata);
        }
       
    }
    catch(e){
        res.status(400).send(e);
    }
})

route.put('/update_vote/:id1/:id2',async(req,res)=>{
    try{
        const _id1=req.params.id1;
        const _id2=req.params.id2;
        console.log(_id1);
        console.log(_id2);
        const polldata=await PollQuestion.findById(_id1);
        if(!polldata) return res.status(404).send("No result page");
        else{
            const item=polldata.option.find(item=>item._id==_id2);
            item.vote=item.vote+1;
            const updated= await polldata.save();
            res.status(200).send(updated);   
        }
    }
    catch(e){
        console.log(e);
        res.status(400).send(e);
    }
})

module.exports = route;