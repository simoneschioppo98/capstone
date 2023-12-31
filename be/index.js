// installazione librerie e middleware
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 7997;
const RegistrationModel = require('./models/registration');

const dotenv = require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

//connessione a mongodb
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// gestione risposta login
app.post('/login',(req, res)=>{
    const{email, password}= req.body;
    RegistrationModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json('perfetto')
            }else{res.json('la password non è corretta')}
        }else{
            res.json('non esiste nessu utente del genere')
        }
    })
})

// connessione a mongodb
mongoose.connection.once('open', () => {
  console.log('Connessione al database MongoDB riuscita!');
  app.listen(PORT, () => {
    console.log(`Il server è attivo sulla porta ${PORT}`);
  });
});
// gestione risposta registrazione
app.post('/register', (req, res) => {
  RegistrationModel.create(req.body)
    .then(registration => res.json(registration))
    .catch(err => res.json(err));
});


