const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")
mongoDB();
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers" ,
    "Origin, X-Requested-With, Content-Type, Accept"
  );//this is done to prevent the cors error or the cross field error
  next(); //calling on 3000 as thats where the app is working
})
app.get('/', (req, res) => {
  res.send('Hello World!') //an endpoint
})
//middleware a piece of code running between two processes

app.use(express.json()) // an important statement baaki google karlena
app.use('/api', require("./Routes/GuideCreate"));
app.use('/api', require("./Routes/UserCreate"));//routes are helpful in breaking code into smaller parts, as calling all endpoints at one place is not good
//note the above line will make an endpoint of localhost:5000/api/createuser as thats what we have used in the Usercreate file post ()
app.use('/api', require("./Routes/DisplayData"));
// app.use('/api', require("./Routes/BlogPut"));
//we can also make it all in index.js by using app.post\


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//note: mongoDB doesn't provide a check of repeated data, so you have to create validators to prevent 