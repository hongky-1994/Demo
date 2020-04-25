module.exports = (app) => {
    const Auths = require('../controller/controller.js')

    // Create a new user
    app.post('/auth', Auths.create)
    
    // Find all user
    app.get('/auth', Auths.findAll)
    
    // Find a user, compare for login
    app.post('/auth/login', Auths.checkLogin )
    
    // Update a user with userID
    app.put('/auth/:authId', Auths.update)
    
    // Delete a user with userID
    app.delete('/auth/:authId', Auths.delete)

}