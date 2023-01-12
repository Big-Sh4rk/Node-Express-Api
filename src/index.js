const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use('/api', userRoutes);

//routes
app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

// mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((err) => console.error(err));

app.listen(port, () => console.log('server listenning on port', port));