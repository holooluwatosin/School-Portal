/**
 * 1. Create a connection function for mongodb
 * 2. Start a local mongodb server connection
 */

 const mongoose = require('mongoose')
 require('dotenv').config()
 const { MONGO_URI } = process.env
 
 // // Create the connection function
 // const connectDB = () => {
 //     mongoose.connect(MONGO_URI, {
 //         useNewUrlParser: true,
 //         useCreateIndex: true,
 //         useUnifiedTopology: true,
 //         useFindAndModify: false
 //     })
 //     .then(() => {
 //         console.log("MOngodb connected...");
 
 //         // send data
 //     })
 //     .catch((err) => {
 //         console.error(err.message);
 
 //         // Exit with failure
 //         process.exit(1)
 //     })
 // }
 
 // could be rewritten as;
 // Async mongoose connection
 const connectDB = async() => {
     try {
         await mongoose.connect(MONGO_URI, {
             useNewUrlParser: true,
             // useCreateIndex: true,
             useUnifiedTopology: true,
             // useFindAndModify: false
         })
 
         console.log("MongoDB connected...");
 
         // send data afterwards
     } catch (err) {
         console.error(err.message);
 
         // Exit with failure
         process.exit(1)
     }
 }
 
 // To export this file
 module.exports = connectDB
 