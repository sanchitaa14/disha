// const mongoose = require('mongoose');
// const mongoURI = "mongodb+srv://sih:9w4NXgpGnWymMqO5@cluster0.pduzxvo.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"

// const mongoDB =() =>{
//     mongoose.connect(mongoURI, ()=>{
//         console.log("Connect to MongoDB")
//     });
// }
// module.exports = mongoDB;
//exporting so that we can run it with nodemon
//9w4NXgpGnWymMqO5
const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://sih:9w4NXgpGnWymMqO5@cluster0.pduzxvo.mongodb.net/Disha?retryWrites=true&w=majority&appName=AtlasApp";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
        const fetched_data = await mongoose.connection.db.collection("guideInfo");
        fetched_data.find({}).toArray(function (err, data) {
          
          
            
          if (err) console.log(err);
            else {
               global.guideInfo = data; //we can update it anywhere in our app with global
               console.log(global.guideInfo)
            }
        })
        // Your code here
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = mongoDB;