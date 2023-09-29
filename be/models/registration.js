const mongoose = require('mongoose');


// schema per database mongodb
const registerSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

const RegistrationModel = mongoose.model('registration', registerSchema);
module.exports = RegistrationModel;