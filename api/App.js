let***REMOVED***express***REMOVED***=***REMOVED***require('express');

let***REMOVED***cors***REMOVED***=***REMOVED***require('cors');

let***REMOVED***App***REMOVED***=***REMOVED***express();***REMOVED***//instantiates***REMOVED***the***REMOVED***app

let***REMOVED***http***REMOVED***=***REMOVED***require("http").Server(App);***REMOVED***//http***REMOVED***server***REMOVED***is***REMOVED***built***REMOVED***on***REMOVED***express

let***REMOVED***port***REMOVED***=***REMOVED***process.env.PORT;
const***REMOVED***bodyParser***REMOVED***=***REMOVED***require('body-parser');
const***REMOVED***auth***REMOVED***=***REMOVED***require('./auth')
const***REMOVED***posts***REMOVED***=***REMOVED***require('./posts')
const***REMOVED***db***REMOVED***=***REMOVED***require('./db')
const***REMOVED***users***REMOVED***=***REMOVED***require('./users')

App.use(bodyParser.json())
App.use('/db',***REMOVED***db)
App.use('/auth',***REMOVED***auth)
App.use('/posts',***REMOVED***posts)
App.use('/users',***REMOVED***users)

App.use(cors());
App.options('*',***REMOVED***cors());

let***REMOVED***user***REMOVED***=***REMOVED***"admin"
let***REMOVED***pass***REMOVED***=***REMOVED***"sspa"
let***REMOVED***counter***REMOVED***=***REMOVED***0;
let***REMOVED***loggedIn***REMOVED***=***REMOVED***false;

//SET***REMOVED***UP***REMOVED***ROUTES
App.get('/',***REMOVED***function(req,***REMOVED***res){
***REMOVED******REMOVED******REMOVED******REMOVED***res.end("Hello***REMOVED***World,***REMOVED***Testign***REMOVED***the***REMOVED***end***REMOVED***point!")

});***REMOVED***
***REMOVED***


//***REMOVED***App.get('/count',***REMOVED***function(req,***REMOVED***res){
//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***counter++;
//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***//***REMOVED***res.end(`Count:***REMOVED***${counter}`)
//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***res.json({count:***REMOVED***counter})
//***REMOVED***});
App.get('/login',***REMOVED***function(req,***REMOVED***res){
***REMOVED******REMOVED******REMOVED******REMOVED***
***REMOVED******REMOVED******REMOVED******REMOVED***loggedIn***REMOVED***=***REMOVED***!loggedIn;
***REMOVED******REMOVED******REMOVED******REMOVED***//***REMOVED***res.end(`Logged***REMOVED***In:***REMOVED***${logged}`)
***REMOVED******REMOVED******REMOVED******REMOVED***//***REMOVED***console.log(`Logged***REMOVED***In:***REMOVED***${logged}`)
***REMOVED******REMOVED******REMOVED******REMOVED***console.log("Logged:",***REMOVED***loggedIn);

***REMOVED******REMOVED******REMOVED******REMOVED***res.json({loggedIn})
***REMOVED******REMOVED******REMOVED******REMOVED***//***REMOVED***res.json({log:***REMOVED***logged})
});

App.delete('/count',***REMOVED***function(req,***REMOVED***res){
***REMOVED******REMOVED******REMOVED******REMOVED***counter***REMOVED***=***REMOVED***0;
***REMOVED******REMOVED******REMOVED******REMOVED***//***REMOVED***res.end(`Count:***REMOVED***${counter}`)
***REMOVED******REMOVED******REMOVED******REMOVED***res.json({count:***REMOVED***0})
});



App.get('/sum/:v1/:v2',***REMOVED***(req,***REMOVED***res)***REMOVED***=>***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED***const***REMOVED***{v1,***REMOVED***v2}***REMOVED***=***REMOVED***req.params;
***REMOVED******REMOVED******REMOVED******REMOVED***res.json({sum:((+v1)+(+v2))})
});

App.post('/login',***REMOVED***(req,***REMOVED***res)***REMOVED***=>***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED***const***REMOVED***{***REMOVED***username,***REMOVED***password***REMOVED***}***REMOVED***=***REMOVED***req.body;

***REMOVED******REMOVED******REMOVED******REMOVED***if***REMOVED***(username***REMOVED***===***REMOVED***user***REMOVED***&&***REMOVED***password***REMOVED***===***REMOVED***pass)***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***loggedIn***REMOVED***=***REMOVED***true;
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***res.json({***REMOVED***loggedIn:***REMOVED***true,***REMOVED***message:***REMOVED***'Login***REMOVED***successful'***REMOVED***});
***REMOVED******REMOVED******REMOVED******REMOVED***}***REMOVED***else***REMOVED***{
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***loggedIn***REMOVED***=***REMOVED***false;
***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***res.json({***REMOVED***loggedIn:***REMOVED***false,***REMOVED***message:***REMOVED***'Invalid***REMOVED***credentials'***REMOVED***});
***REMOVED******REMOVED******REMOVED******REMOVED***}
});



http.listen(port,***REMOVED***function(){
***REMOVED******REMOVED******REMOVED******REMOVED***console.log(`Listening***REMOVED***on***REMOVED***Port***REMOVED***${port}`)
***REMOVED******REMOVED******REMOVED******REMOVED***//***REMOVED***console.log({env:process.env})
})
