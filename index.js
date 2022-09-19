require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mongoDB = process.env.DBurl;
const exeRouter = require ('./routes/routes.js');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', exeRouter);

mongoose.connect(mongoDB);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', ()=>{
    console.log('database connected');
})

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Blog and users api')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})