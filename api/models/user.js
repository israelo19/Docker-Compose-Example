const***REMOVED***mongoose***REMOVED***=***REMOVED***require('mongoose')

const***REMOVED***Schema***REMOVED***=***REMOVED***mongoose.Schema

const***REMOVED***UserSchema***REMOVED***=***REMOVED***new***REMOVED***Schema({
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***username:***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***type:String,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***required:***REMOVED***false
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***},

***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***firstname:***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***type:***REMOVED***String,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***required:***REMOVED***false
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***},

***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***lastname:***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***type:***REMOVED***String,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***required:***REMOVED***false
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***},

***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***password:***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***type:***REMOVED***String,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***required:***REMOVED***false
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***},***REMOVED***

***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***email:***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***type:***REMOVED***String,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***required:***REMOVED***false
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***}

})

//export***REMOVED***
module.exports***REMOVED***=***REMOVED***User***REMOVED***=***REMOVED***mongoose.model('users',***REMOVED***UserSchema)
