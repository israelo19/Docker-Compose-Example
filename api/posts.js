const***REMOVED***Router***REMOVED***=***REMOVED***require('express').Router***REMOVED***//imports***REMOVED***router***REMOVED***
const***REMOVED***router***REMOVED***=***REMOVED***new***REMOVED***Router()
let***REMOVED***appAuth***REMOVED***=***REMOVED***require('./app-auth')


const***REMOVED***posts***REMOVED***=***REMOVED***[
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***username:***REMOVED***'Israel',
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***title:***REMOVED***'Post***REMOVED***1'
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***},
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***username:***REMOVED***'Jimbo',
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***title:***REMOVED***'Post***REMOVED***2'
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***}
]


//@route***REMOVED***GET***REMOVED***/api/posts/
router.get('/',***REMOVED***[appAuth.authenticateToken],***REMOVED***(req,***REMOVED***res)***REMOVED***=>***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***res.json(posts.filter(post***REMOVED***=>***REMOVED***post.username***REMOVED***===***REMOVED***req.user.name))
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***})

module.exports***REMOVED***=***REMOVED***router