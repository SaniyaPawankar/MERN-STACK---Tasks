import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import './database/connect.js';

dotenv.config({path: "./config.env"});

const app = express();
const PORT = process.env.PORT || 5023;

app.use(express.static("public"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
