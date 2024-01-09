const mongoose = require('mongoose')
const { Schema } = mongoose; //destructuring
const UserSchema = new Schema({
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
    }

});                    //learn about callbacks, fetch datat is changed using callbacks
module.exports = mongoose.model('user', UserSchema) //a model is a wrapper for schema sort of as well as makes it easier to perform CRUD operations, 'user' it creates a database in the system with the name user, model states how to store the data
//we import a model using this statement, it helps in talking with the mongoDB