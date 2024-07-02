let***REMOVED***express***REMOVED***=***REMOVED***require("express");

let***REMOVED***App***REMOVED***=***REMOVED***express();***REMOVED***//instantiates***REMOVED***the***REMOVED***app

let***REMOVED***http***REMOVED***=***REMOVED***require("http").Server(App);***REMOVED***//http***REMOVED***server***REMOVED***is***REMOVED***built***REMOVED***on***REMOVED***express

let***REMOVED***port***REMOVED***=***REMOVED***process.env.PORT;

let***REMOVED***counter***REMOVED***=***REMOVED***0;

//SET***REMOVED***UP***REMOVED***ROUTES
App.get('/',***REMOVED***function(req,***REMOVED***res){
***REMOVED******REMOVED******REMOVED******REMOVED***res.end("Hello***REMOVED***World,***REMOVED***Testign***REMOVED***the***REMOVED***end***REMOVED***point!")

});***REMOVED***




App.get('/count',***REMOVED***function(req,***REMOVED***res){
***REMOVED******REMOVED******REMOVED******REMOVED***counter++;
***REMOVED******REMOVED******REMOVED******REMOVED***res.end(`Count:***REMOVED***${counter}`)

});



App.get('/sum/:v1/:v2',***REMOVED***(req,***REMOVED***res)***REMOVED***=>***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED***const***REMOVED***{v1,***REMOVED***v2}***REMOVED***=***REMOVED***req.params;
***REMOVED******REMOVED******REMOVED******REMOVED***res.json({sum:((+v1)+(+v2))})
});



http.listen(port,***REMOVED***function(){
***REMOVED******REMOVED******REMOVED******REMOVED***console.log(`Listening***REMOVED***on***REMOVED***Port***REMOVED***${port}`)
***REMOVED******REMOVED******REMOVED******REMOVED***console.log({env:process.env})
})

