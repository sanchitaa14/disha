const express = require('express')
const router = express.Router()
const User = require('../models/User') //gets data of user
const {body, validationResult} = require('express-validator') //importing the body forn validating it
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); //generated at the time of login
const jwtsecret = "MyNameIsSanchitaBhardwajDattebay" //passing a 32 bit secret key can also use .env in react

router.post("/createuser", [
body('email', 'Incorrect Email').isEmail(), //this isEmail is taken from the body that we imported
body('name').isLength({min: 5}),
body('password', 'Incorrect Password').isLength({min:5})],

async(req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){ //checks whether the req adheres to the above check, uses the second imported function
        return res.status(400),json({errors: errors.array()});
    } //gives an array or errors
    const salt =  await bcrypt.genSalt(10); //any value can be taken other than 10
    let secPassword = await bcrypt.hash(req.body.password, salt);  //generating hash with two parameters 1)whose hash to be be generated and 2)the salt 
     //all bcrypt functions are async , the password above is the one taken from frontend, apart from bcrypt other hashing clients are also there
    try{ // since it is an asynchronous operation it is required to use await otherwise it might not show the data
       await User.create({   //note:order doesn't matter but the contents should be same as we have scheme
            name: req.body.name,
            password:secPassword,
            email:req.body.email,
            location: req.body.location,
            number: req.body.number
        })
        res.json({success:true}) //telling the backend that a new user has been created so we send a response
    }catch(error){
         console.log(error)
         res.json({success:false});
    }
}) 

router.post("/loginuser",[body('email', 'Incorrect Email').isEmail(), //this isEmail is taken from the body that we imported, above for validation

body('password', 'Incorrect Password').isLength({min:5})],
async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){ //checks whether the req adheres to the above check, uses the second imported function
        return res.status(400),json({errors: errors.array()});
    }
    let email = req.body.email
    try{
       let userData = await User.findOne({email}); //finding the email
       if(!userData){
        return res.status(400).json({errors: "Try logging in with correct credential"})
       }//not only email but whole data comes in response
       
       const pwdCompare = await bcrypt.compare(req.body.password, userData.password)
       
       if(!pwdCompare){
        return res.status(400).json({errors: "Try logging in with correct credential"})
       }//key is password in mongoDB and also in frontend
      const data = { //data has to be an object for signature
        user:{
            id:userData.id //can also put expiration time
        }
      }//auth token will be generated with this below statement
      const authToken = jwt.sign(data, jwtsecret)//passing the token, note the key can be random, I used a string value
       return res.json({success:true, authToken:authToken}) //also sending an auth token

    }
    catch (err){
        console.log(error)
        res.json({success:false});
}}) //why we have object ids in mongo db? used as a primary key, has three components timestamp, matchine identifier and process identifier, counter
//This approach provides a unique identifier for each document, which can be helpful for debugging, tracking, and monitoring.

module.exports = router; //router because thats the name
//a request and a response can give any name but it is just a nomenclature
//use head in postman or thunderclient to give data, and make the content type json
//express validator used for validating and checking or putting checks on whether data is of the correct type