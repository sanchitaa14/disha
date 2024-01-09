const express = require('express')
const router = express.Router()
const BlogPost = require('../models/BlogModel')

router.post("/blogs", async(req,res)=>{
        try{
            await BlogPost.create({
                username: req.body.username,
                title: req.body.title,
                content: req.body.content,
            })
            res.json({success:true})
        }catch(error){
            console.log(error)
            res.json({success:false});
        }
    })
module.exports = router; 