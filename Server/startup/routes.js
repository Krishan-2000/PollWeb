const express= require('express')
const pollquestion = require('../routes/pollquestion');

module.exports = function(app)
{
    app.use(express.json());
    app.use(express.static("public"));
    app.use('/api/poll',pollquestion);
}