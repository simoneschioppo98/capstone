const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

const RegistrationModel = mongoose.model('registration', registerSchema);
module.exports = RegistrationModel;