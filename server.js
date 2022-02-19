/**
 * 1. Creating an express server
 * 2. Connect to mongodb
 * 3. Initialize express
 * 4. Initialize express middleware
 * 5. Create a simple GET request route (optional)
 * 6. Inject our routes
 * 7. Listen to our app connection
 */

 const express = require('express')
 const connectDB = require('./db')
 require('dotenv').config() // allows us to use the environment variables in .env
 
 // PORT AND HOST
 const port = process.env.PORT
 const host = process.env.HOST
 /**
  * they can also be deconstructed as;
  * const { PORT } = process.env
  * const { HOST } = process.env
  */
 
 // Connect to db
 connectDB()
 
 // Initialize express
 const app = express()
 
 // Initialize express middleware
 app.use(express.json({extended: false}))
 
 // Create a basic express route
 app.get('/', (req, res) => {
     res.json({message: 'Welcome to Lagos State University Portal'})
 })
 
 // Listen to connection
 app.listen(port, host, () => {
     console.log(`App running on http://${host}:${port}`);
 })
 