const express = require("express");
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');

//tests that mongoose exists, if it doesn't it makes sures the connection exists
//
router.get("/test", (req, res) => {
	// mongoose.set('autoIndex', true);
	if(mongoose && mongoose.connection && mongoose.connection.readyState == 1){		
		res.json({connected:true, dt:new Date()})
		return
	}
	mongoose.connect( process.env.MONGO_URL,{ useNewUrlParser: true,autoIndex: true })
	.then(() => {
		res.json({connected:true, dt:new Date()})
	})
	.catch(err => {
		res.json({connected:false, dt:new Date(), err})
	});
})
module.exports = router;
 