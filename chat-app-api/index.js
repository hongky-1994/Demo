const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dbConfig = require('./config/database.config.js')


// Configuring the database
mongoose.connect(dbConfig.strConn, { useNewUrlParser: true })


// check connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected!");
});


// create express app
const app = express()

// parse request of content type (application/x-www-form-urlencoded || application/json)
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// config file server
const port = 4000
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  



require('./app/routes/routes.js')(app)

// Start server API with port 4000  
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})