// 
const jwt = require('jsonwebtoken') // imports the jwt Library
const Router = require('express').Router // imports the router function
const router = new Router() //creates a router object
const User = require('./models/user')
let appAuth = require('./app-auth')
let auth = require('./auth')


router.get('/new', (req, res) => {
       
       let newUser = new User({username: 'admin', password: '12345'})

       newUser.save()
       .then((newUserObj) => {
              res.json({user:newUserObj})
       }) 
       .catch((err) => {
              console.log(err)
              res.json({err})


       })
})

router.get('/',[appAuth.checkToken], (req, res) => {
       
       res.json({decoded:request.decoded})
})


router.get('/all', (req, res) => {
       User.find({})
       .then( (users) => {
              res.json({users})
       })
       .catch((err) => {
              res.json({err})
       })
})

router.post('/',(req, res) => {
       // req.body
       
} )


router.put('/', (req,res) => {
       // req
})

router.delete('/', (req, res) => {

       res.json({})
})
 


module.exports = router;