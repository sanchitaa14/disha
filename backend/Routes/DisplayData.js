const express = require('express')
const router = express.Router()

router.post("/guideData", (req,res) =>{
    try{
        
        res.send([global.guideInfo, global.time])
    } catch(error){
        console.error(error.message);
        res.send("Server Error")
    }//jsx has a limitation a json array cant be diplayed directly in the frontend, each element should be displayed using a for loop so one by one
})//since we are sending data to frontend

module.exports = router;