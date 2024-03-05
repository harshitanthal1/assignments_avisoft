const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/books');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost:27017';

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/books', bookRoutes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });
