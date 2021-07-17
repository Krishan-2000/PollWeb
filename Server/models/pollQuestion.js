const mongoose = require('mongoose');
const Joi = require('joi');
const { number, string } = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const pollquestion = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        trim: true,
    },
    option: [
        {
            text : {type: String},
            vote : {type: Number},
        }
    ]
});



const PollQuestion = mongoose.model('PollQuestion', pollquestion);

module.exports.PollQuestion = PollQuestion;
// module.exports.validatepollquestion= validatepollquestion;