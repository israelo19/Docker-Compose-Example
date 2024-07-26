const jwt = require('jsonwebtoken') // imports the jwt Library
const Router = require('express').Router // imports the router function
const router = new Router() //creates a router object
const User = require('./models/user')
const Post = require('./models/post')


let refreshTokens = [] //refresh token array





//function that generates access tokens
function generateAccessToken(user) {
       return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1m' })
}

//this endpoint allows us the get refresh tokens
router.post('/token', (req, res) => {
  const refreshToken = req.body.token
  if (refreshToken == null) return res.sendStatus(401)
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    const accessToken = generateAccessToken({ name: user.name })
    res.json({ accessToken: 'Bearer ' + accessToken })
  })
})
//logs out by removing the regresh token 
router.delete('/logout', (req, res) => {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token)
  res.sendStatus(204)
})


//logs in by generating both an access and refresh token 
router.post('/login', (req, res) => {
       // Authenticate User
     
       const username = req.body.username
       const user = { name: username }

       const password = req.body.password
       User.findOne({
          username,
          password
       })
       .then((userObj) => {
          console.log({userObj})
          if(userObj){

            console.log("Username: ", user)

            console.log(process.env.ACCESS_TOKEN_SECRET)
     
            const accessToken = generateAccessToken(user)
            const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
            refreshTokens.push(refreshToken)
            res.json({ accessToken:'Bearer ' +  accessToken, refreshToken: 'Bearer ' + refreshToken, userId: userObj._id })         
          
          } 

          else{
            res.status(404).json({
              val: "Not Found"
            });
            return
          }

       })
       .catch((err) => {
          console.log(err)
          res.status(404).json({
            val: "Not Found",
            error: err
          });
          return
       })

     })
     
     
     


module.exports = router

