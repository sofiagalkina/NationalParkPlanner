const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const routes = require('./routes/index.js');
const mongoose = require('mongoose');
require('dotenv').config();

//connect to MONGODB
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

//middleware
app.use(express.json());
//body-parser
app.use(express.urlencoded({extended: true}));

//all routes go through index
app.use('/', routes);

// error handling - needs to go below all other routes
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

//start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});