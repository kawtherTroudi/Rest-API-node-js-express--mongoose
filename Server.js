const express = require("express");
const fs = require("fs");
require('dotenv').config
const app = express();
var date = new Date()
const database = require ("./database")
let User = require ("./Models/User") 

const PORT = process.env.PORT || 3000;
app.use(express.json())
app.set("view engine","ejs");

//ADD A NEW USER TO THE DATABASE 

app.post('/', function(req, res) {
    console.log(req.body)
let user = new User ({
    name : req.body.name, age : req.body.age
})
user.save().then(
    () => {
      res.status(201).json({
        message: 'User added successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(500).json({
        error: error
      });
    }
  );
}
);

//RETURN ALL USERS

app.get('/users', function(req, res) {
User.find({}, function(err, users) {
  var userMap = {};

  users.forEach(function(user) {
    userMap[user._id] = user;
  });

  res.send(userMap);  
});
});


//EDIT A USER BY ID 

app.put('/', function(req, res) {
User.findOneAndUpdate()
});

//REMOVE A USER BY ID

app.delete('/', function(req, res) {
User.findByIdAndRemove()
});

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`Server is runnning on port ${PORT}`)
);


