const express = require('express')
const mongoose = require('mongoose')
const PORT = 5050;

require("dotenv").config();

const app = express();

app.use(express.json())

mongoose.connect(process.env.MONGO_DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Errore di connessione al server'))
db.once('open', () => 
console.log('database MongoDb connesso'));






















app.listen(PORT, () => console.log(`Server avviato e in ascolto sulla porta ${PORT}`))