const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bcrypt = require('bcrypt');
const session = require("express-session");
const User = require('./models/user');
//configuring the AWS environment
// AWS.config.update({
//     accessKeyId: "AKIAJJWBUD7DJYZMDT5Q",
//     secretAccessKey: "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"
//   });

// var s3 = new AWS.S3();
// var filePath = "./data/file.txt";

// //configuring parameters
// var params = {
//   Bucket: 'scrobuckettrial',
//   Body : fs.createReadStream(filePath),
//   Key : "folder/"+Date.now()+"_"+path.basename(filePath)
// };

// s3.upload(params, function (err, data) {
//   //handle error
//   if (err) {
//     console.log("Error", err);
//   }

//   //success
//   if (data) {
//     console.log("Uploaded in:", data.Location);
//   }
// });
//aws config over
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(__dirname + '/Assets'));
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "I love Batman" }))
var currentdate = new Date(); 
var datetime = " at " + currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();

    // MONGO CONFIG BELOW
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Roehit:Techfest2021@techfest.afglq.mongodb.net/KnowledgeDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connectionParams={
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true 
}
mongoose.connect(uri,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
client.connect(err => {
  const collection = client.db("KnowledgeDB").collection("user");
  // perform actions on the collection object
  client.close();
});
//Mongo config over

const requireLogin = (req, res, next) => {
  if (!req.session.user_id) {
      return res.redirect("/login");
  }
  next();
}
app.get("/register", (req, res) => {
  res.render('register', { msg: "" });
});
app.post("/register", async (req, res) => {
  const { name, department, whatsapp_number, email, reg, year, phone_number, password } = req.body;
  const hash = await bcrypt.hash(password, 12);
  // const splitEmail = (email) => {
  //     const result = email.split('@');
  //     if (result[1] === "srmist.edu.in") {
  //         const emailName = result[0];
  //         console.log(emailName);
  //     }
  // }
  // splitEmail(email);
  User.findOne({ email: email }).then(user => {
      if (user) {
          res.render("register", { msg: "User already exist" });
      } else {

          const user = new User({
              email,
              password: hash,
              name,
              opco
          });
          user.save();
          req.session.user_id = user._id;
          res.redirect("/login");
      }
  });
});
app.get("/", (req, res) => {
  res.redirect("/login");
});
app.get("/login", (req, res) => {
  res.render("login", { msg: "" });
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
      const user = await User.findOne({ email });
      const validPassword = await bcrypt.compare(password, user.password);

      if (validPassword) {
          if (user.email == "webdev.scro@gmail.com") {
              console.log("Admin Logged in" + datetime);
              req.session.user_id = user._id;
              return res.redirect("/admin/" + user._id);
          }
          req.session.user_id = user._id;
          res.redirect("/portal/" + user._id);
      } else {

          res.redirect("/login/wrgcre");
          // console.log("Invalid password entered.")
      }
  } catch (error) {
      res.redirect("/login/wrgcre");
  }


});
app.get("/login/wrgcre", (req, res) => {
  res.render("login", { msg: "Wrong email or password" });
});
app.get("*", (req, res) => {
  res.render("404Page");
});
app.listen(3000, () => {
  console.log("SERVER STARTED");
});