const Auths = require('../models/model.js')


// Create new user
exports.create = (req, res) =>{
    try {
        const user = new Auths({
            email: req.body.email,
            password: req.bodu.password
        })
        const result = user.save()
        res.send(result)
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred white creating new User."
        })
    }
}

// Retrieve and return all user
exports.findAll = (req, res) => {

}

// Find a single user with email in request
exports.checkLogin = async (req, res) => {
    try {
        console.log("Auths.find ----------------------- Start")
        const result = await Auths.find({email: req.body.email})
        console.log("Auths.find ", result[0])
        if (result[0] === undefined) {
            console.log('Email khong ton tai')
            res.send({message: "Email is incorrect!!!"})
        } else if ( result[0].password !== req.body.password) {
            res.send({message: "Password is incorrect!!!"})
        } else {
            res.send({
                message: "SUCCESS",
                result: {
                    __id: result[0].__id,
                    email: result[0].email,
                    __v: result[0].__v
                }
            })
        }
    } catch (err) {
        res.status(500).send({
            message: "Error when comparison with email: " + req.body.email
        })
    }
}

exports.update = (req, res) => {
 
}
// Delete a note with the userID in request
exports.delete = (req, res) => {
    
}