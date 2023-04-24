require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const cors = require('cors');

app.use(cors());

mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database!'));

app.use(express.json());

const offersRouter = require('./routes/offers');
app.use('/offers', offersRouter);

app.listen(3001, () => console.log('Server started!'));