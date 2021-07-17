const express = require('express');
const app = express();

//db connection
require('./startup/db')();

// routes
require("./startup/routes")(app);

const port = process.env.port||7000;
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})