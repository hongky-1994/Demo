const mongoose = require('mongoose')

const auths = new mongoose.Schema({
    email: String,
    password: String,
}) 
const Auths = () => mongoose.model("Authentication", auths)
module.export =  Auths;