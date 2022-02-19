const express = require('express')
const router = express.Router()
const { check } = require('express-validator')

const auth = require('../middleware/auth')

// Import the router controller
const userController = require('../Controller/userController')

// Login user route
router.post('/api/auth/login', 
    [
        check("email", "Please enter a valid email").isEmail(),
        check("password", "A valid password required").exists()
    ], 
    userController.loginUser
)

// Get logged in user
router.get('/api/auth', auth, userController.getLoggedInUser)

module.exports = router


/**
 * The three logics to every project.
 * M -- Models
 * V -- Views
 * C -- Controller
 */