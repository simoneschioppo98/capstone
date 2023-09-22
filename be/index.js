const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 7997;
const RegistrationModel = require('./models/registration');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://simoneschioppo:hiEYaFxsxnNbehZS@simone-epicode.uibfskc.mongodb.net/registration', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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


mongoose.connection.once('open', () => {
  console.log('Connessione al database MongoDB riuscita!');
  app.listen(PORT, () => {
    console.log(`Il server è attivo sulla porta ${PORT}`);
  });
});

app.post('/register', (req, res) => {
  RegistrationModel.create(req.body)
    .then(registration => res.json(registration))
    .catch(err => res.json(err));
});


