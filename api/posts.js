const Router = require('express').Router //imports router 
const router = new Router()
let appAuth = require('./app-auth')


const posts = [
       {
         username: 'Israel',
         title: 'Post 1'
       },
       {
         username: 'Jimbo',
         title: 'Post 2'
       }
]


//@route GET /api/posts/
router.get('/', [appAuth.authenticateToken], (req, res) => {
       res.json(posts.filter(post => post.username === req.user.name))
     })

module.exports = router