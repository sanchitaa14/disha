const mongoose = require("mongoose");
const {Schema} = mongoose;
const GuideSchema = new Schema({
  name:{
    type: String,
    required: true //we can use validation or develop a structure using schema
},
location:{
    type:String,
    required: true,
},
email:{
    type:String,
    required: true,
},
password:{ 
    type: String,
    required: true,
},
number:{
    type:Number,
    required:true,
},
anumber:{
  type:Number,
  required:true,
},
description:{
  type:String,
  required:true,
},
image:{
  type:String,
  required: true,
}
  // name: String,
  // image: String,
  // password: String,
  // number: Number,
  // description: String,
  // location: String,
  // anumber: Number,
  // email: String,
});

module.exports = mongoose.model('guideInfo', GuideSchema);
