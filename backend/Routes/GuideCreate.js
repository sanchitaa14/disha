const express = require('express')
const router = express.Router()
const User = require('../models/User') //gets data of user
const {body, validationResult} = require('express-validator') //importing the body forn validating it
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); //generated at the time of login
const jwtsecret = "MyNameIsSanchitaBhardwajDattebay"

router.post("/createGuide", [
    body('email', 'Incorrect Email').isEmail(), //this isEmail is taken from the body that we imported
    body('name').isLength({min: 5}),
    body('password', 'Incorrect Password').isLength({min:5})],
    

    
    async(req,res)=>{
    
        const errors = validationResult(req);
        if(!errors.isEmpty()){ //checks whether the req adheres to the above check, uses the second imported function
            return res.status(400).json({errors: errors.array()});
        } //gives an array or errors
        const salt =  await bcrypt.genSalt(10); //any value can be taken other than 10
        let secPassword = await bcrypt.hash(req.body.password, salt);  //generating hash with two parameters 1)whose hash to be be generated and 2)the salt 
         //all bcrypt functions are async , the password above is the one taken from frontend, apart from bcrypt other hashing clients are also there
        try{ // since it is an asynchronous operation it is required to use await otherwise it might not show the data
           await User.create({   //note:order doesn't matter but the contents should be same as we have scheme
                name: req.body.name,
                password:secPassword,
                email:req.body.email,
                image: req.body.image,
                description: req.body.description,
                location: req.body.location,
                number: req.body.number,
                anumber: req.body.anumber
            })
            res.json({success:true}) //telling the backend that a new user has been created so we send a response
        }catch(error){
             console.log(error)
             res.json({success:false});
        }
    }) 
    
    //why we have object ids in mongo db? used as a primary key, has three components timestamp, matchine identifier and process identifier, counter
    //This approach provides a unique identifier for each document, which can be helpful for debugging, tracking, and monitoring.
    
    module.exports = router;