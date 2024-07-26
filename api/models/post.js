const***REMOVED***mongoose***REMOVED***=***REMOVED***require('mongoose')

const***REMOVED***Schema***REMOVED***=***REMOVED***mongoose.Schema

const***REMOVED***PostSchema***REMOVED***=***REMOVED***new***REMOVED***Schema({
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***username:***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***type:String,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***required:***REMOVED***false
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***},

***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***title:***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***type:***REMOVED***String,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***required:***REMOVED***false
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***},***REMOVED***

***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***body:***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***type:***REMOVED***String,
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***required:***REMOVED***false
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***}

})

//export***REMOVED***
module.exports***REMOVED***=***REMOVED***Post***REMOVED***=***REMOVED***mongoose.model('posts',***REMOVED***PostSchema)