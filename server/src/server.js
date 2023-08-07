const express = require('express');
const http = require('http');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();
const cors = require('cors');
const app = express();
const server = http.createServer(app);

const port = 9000 || process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const bookRoutes = require('./routes/book');




app.get('/api', (req, res, next) => {
    res.send('Hello World');
});
app.use('/api/book', bookRoutes);

server.listen(process.env.PORT || 9000, '0.0.0.0', () => {
    console.log(`app is running on port ${port}`);
});

const crypto = require("crypto");





