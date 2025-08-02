//server/index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // to read from .env

const app = express();

//middleware
app.use(cors());
app.use(express.json()); // parse json bodies

//Routes
app.get('/',(req,res)=>{
    res.send('api is running');
});

//cnct to mongodb and start server
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log('cnctd to mongoDB')
    app.listen(PORT,()=>{
        console.log(`server running on http://localhost:${PORT}`);
    });
})
.catch((err)=>{
    console.error('cnctn error mongodb',err.message);
});