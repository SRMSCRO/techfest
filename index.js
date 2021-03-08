//------LEAD MANAGEMENT SYSTEM---------------
//TEAM MEMBERS : S ERIC RAYMUND REX , ROEHIT RANGANATHAN, AMAN CHAWLA, AMANDEEP KAUR, KARTHIK ANIL

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// ----------------MODELS---------------------------
const Lead = require('./models/lead');
const User = require('./models/user');

const bcrypt = require('bcrypt');
const session = require("express-session");
const db = "LMS_4";
mongoose.connect('mongodb://localhost:27017/'+db, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log("MONGO CONNECTION OPEN") }).catch(err => {
    console.log("THERE IS A PROBLEM");
    console.log(err)
});
mongoose.set('useFindAndModify', false);

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(__dirname + '/Assets'));
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "I love TechFest" }));

//Middleware for login - AUTENTICATION
const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect("/login");
    }
    next();
}

// MY ROUTES

// ----------------HOME PAGE---------------------------
app.get("/",(req,res)=>{
    res.redirect("/login");
});
// -------------------ADMIN PAGE EXPORT ---------------
app.get("/leadexport/:id",requireLogin,(req,res)=>{

    //Find all the leads and display it
    Lead.find({},(err,leads)=>{

        //Checking the user is admin or not
        User.findById(req.params.id).then(user => {
            
            if(user.Position=="Admin"){
                User.find({}).then(allUsers=>{
                    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
                    res.render("leadexport",{leads:leads,id:req.params.id,allUsers:allUsers,user:user});
                });
            }else{User.find({lead_submitted_by:user.Name, lead_submitted_to:user.Name}).then(allUsers=>{
                res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
                res.render("leadexport",{leads:leads,id:req.params.id,allUsers:allUsers,user:user});
            });
            }
        });
        
    }).sort({ Status: 1 });
    ;
    
});
// ------------------------User Lead export ------------
// -----------------AUTENTICATION-----------------------
// --------------LOGIN------------------
app.get("/login",(req,res)=>{
    const countUser=User.countDocuments();
    res.render("login",{message:"",countUser});
});
app.post("/login",async(req,res)=>{
    const {Email,Password}=req.body;

    try {
        const user = await User.findOne({ Email });
        const validPassword = await bcrypt.compare(Password, user.Password);

        if (validPassword) {
            req.session.user_id = user._id;
            res.redirect("/admin/"+user._id);
        }else{
            res.render("login",{message:"Wrong Email or password"});
        }
    }catch(error){
                console.log(error);
                res.render("login",{message:"Wrong Email or password"});
            } 
});
//----------------REGISTER---------------------
app.post("/register",async(req,res)=>{

    //Counting number of users in User Collection before saveing the data
    const countUser=await User.countDocuments();

    //For encryption
    const {Name,OpCo,Email,Password}=req.body;
    const hash = await bcrypt.hash(Password, 12);

    //Checking the Email is already registered
    User.findOne({ Email: Email }).then(user => {
        if(user){
            res.redirect("/login");
        }else{
            if(countUser==0){
                //If the userCount is 0 make the position as Admin
                const user=new User({
                    Name,OpCo,Email,Password:hash,Position:"Admin"
                });
                user.save();
            }else{
                //Else Dont care about admin
                const user=new User({
                    Name,OpCo,Email,Password:hash,Position:"Employee"
                });
                user.save();
                
            }
            res.redirect("/login");
        }
    });
});
//------------------Logout---------------------------
app.post("/logout", (req, res) => {
    req.session.user_id = null;
    req.session.destroy();
    res.redirect("/login");
});
// -------------------------Filter-----------------------


// ----------------ADMIN PAGE- To Submit Leads-------------------------------------------------------------------------------------------
app.get("/admin/:id",requireLogin,(req,res)=>{
    
    //Find all the leads and display it
    Lead.find({},(err,leads)=>{

        //Checking the user is admin or not
        User.findById(req.params.id).then(user => {
            
            if(user.Position=="Admin"){
                User.find({}).then(allUsers=>{
                    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
                    res.render("admin",{leads:leads,id:req.params.id,allUsers:allUsers,user:user});
                });
            }else{
                res.redirect("/sales_representative/"+user._id);
            }
        });
        
    }).sort({ Status: 1 });
    
});
app.post("/Submit_lead/:id",async(req,res)=>{

    //To find the data and the time and store it in open time
    var currentdate = new Date();
    var datetime = " at " + currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();

    //Storeing in data base
    const {customer_name,project_details,Segment_details,lead_submitted_by,lead_submitted_to,project_name,project_value,}=req.body;
    const lead=new Lead({
        customer_name,project_details,Segment_details,lead_submitted_by,lead_submitted_to,project_value,
        Open_time:datetime,project_name,
        Status:"Open",
    });
    lead.save();
    res.redirect("/sales_representative/"+req.params.id);
});
//-----------------------------Admin-Page - To filter----------------------------------------------------------------------------------------------
app.get("/q/:name/:id",requireLogin,async(req,res)=>{
     
         // Find the lead for the user
     Lead.find({lead_submitted_to:req.params.name},(err,leads)=>{
         res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
         res.render("filter",{leads:leads,userId:req.params.id});
     });
});

// ----------------SALES REP PAGE - To update the Status of the lead-------------------------------------------------------------------------------
app.get("/sales_representative/:id",requireLogin,async(req,res)=>{
    const countLead_open= await Lead.countDocuments({"Status":"Open"});
    const countLead_closed= await Lead.countDocuments({"Status" : "Closed"});
    const countLead_validated= await Lead.countDocuments({"Status" : "Validated"});
    const countLead_rejected= await Lead.countDocuments({"Status" : "Rejected"});
    // Find the user by ID
    let _id=req.params.id;
    const user = await User.findOne({ _id });
    // console.log(user.Name);
    const countLead=await Lead.countDocuments();
    // Find the lead for the user
     Lead.find({},(err,leads)=>{
        User.find({}).then(allUsers=>{
            res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
            res.render("sales_representative",{leads:leads,userId:req.params.id, user:user, countLead,allUsers:allUsers,countLead_open,countLead_closed,countLead_rejected,countLead_validated,});
        });
    }).sort({ Status: 1 });
});
app.post("/update_status/:id/:userId",async(req,res)=>{
    //To find the data and the time and store it in open time
    var currentdate = new Date();
    var datetime = " at " + currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();

    let Status=req.body.status;
    //Update the status and time of the respective status
    //To find the status is Validated ,Rejected or Closed

    //If Validated or Rejected
    if(Status=="Validated"||Status=="Rejected")
    {
        Lead.findByIdAndUpdate(req.params.id,{"Status":Status,"Validate_or_reject_time":datetime, "Update_time":datetime,},(err,result)=>{
            if(err){
                res.send(err);
            }else{
                res.redirect("/sales_representative/"+req.params.userId);
            }
        });
    }

    //If Closed
    if(Status=="Closed")
    {
        Lead.findByIdAndUpdate(req.params.id,{"Status":Status,"Closed_time":datetime, "Update_time":datetime },(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.redirect("/sales_representative/"+req.params.userId);
        }
    });
    }
});

app.get("*",(req,res)=>{
    res.send("404 page not found");
});
// The SSERVER starts in port::3000
app.listen(3000, () => {
    console.log("SERVER STARTED");
});