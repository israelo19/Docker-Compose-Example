let***REMOVED***express***REMOVED***=***REMOVED***require('express');

let***REMOVED***cors***REMOVED***=***REMOVED***require('cors');

let***REMOVED***App***REMOVED***=***REMOVED***express();***REMOVED***//instantiates***REMOVED***the***REMOVED***app

let***REMOVED***http***REMOVED***=***REMOVED***require("http").Server(App);***REMOVED***//http***REMOVED***server***REMOVED***is***REMOVED***built***REMOVED***on***REMOVED***express

let***REMOVED***port***REMOVED***=***REMOVED***process.env.PORT;
const***REMOVED***bodyParser***REMOVED***=***REMOVED***require('body-parser');

App.use(bodyParser.json())


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
***REMOVED******REMOVED******REMOVED******REMOVED***console.log({env:process.env})
})

//***REMOVED***let***REMOVED***express***REMOVED***=***REMOVED***require('express');

//***REMOVED***let***REMOVED***cors***REMOVED***=***REMOVED***require('cors');

//***REMOVED***let***REMOVED***App***REMOVED***=***REMOVED***express();***REMOVED***//instantiates***REMOVED***the***REMOVED***app

//***REMOVED***let***REMOVED***http***REMOVED***=***REMOVED***require("http").Server(App);***REMOVED***//http***REMOVED***server***REMOVED***is***REMOVED***built***REMOVED***on***REMOVED***express

//***REMOVED***let***REMOVED***port***REMOVED***=***REMOVED***process.env.PORT;

//***REMOVED***const***REMOVED***express***REMOVED***=***REMOVED***require('express');
//***REMOVED***const***REMOVED***bodyParser***REMOVED***=***REMOVED***require('body-parser');

//***REMOVED***const***REMOVED***app***REMOVED***=***REMOVED***express();
//***REMOVED***app.use(bodyParser.json());


//***REMOVED***App.use(cors());
//***REMOVED***App.options('*',***REMOVED***cors());

//***REMOVED***let***REMOVED***user***REMOVED***=***REMOVED***"d"
//***REMOVED***let***REMOVED***pass***REMOVED***=***REMOVED***"dd"
//***REMOVED***let***REMOVED***counter***REMOVED***=***REMOVED***0;
//***REMOVED***let***REMOVED***loggedIn***REMOVED***=***REMOVED***false;

//***REMOVED***const***REMOVED***validUsername***REMOVED***=***REMOVED***"admin";
//***REMOVED***const***REMOVED***validPassword***REMOVED***=***REMOVED***"sspa";


//***REMOVED***//SET***REMOVED***UP***REMOVED***ROUTES
//***REMOVED***App.get('/',***REMOVED***function(req,***REMOVED***res){
//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***res.end("Hello***REMOVED***World,***REMOVED***Testign***REMOVED***the***REMOVED***end***REMOVED***point!")

//***REMOVED***});***REMOVED***
***REMOVED***


//***REMOVED***//***REMOVED***App.get('/count',***REMOVED***function(req,***REMOVED***res){
//***REMOVED***//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***counter++;
//***REMOVED***//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***//***REMOVED***res.end(`Count:***REMOVED***${counter}`)
//***REMOVED***//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***res.json({count:***REMOVED***counter})
//***REMOVED***//***REMOVED***});
//***REMOVED***App.get('/login',***REMOVED***function(req,***REMOVED***res){
***REMOVED******REMOVED******REMOVED******REMOVED***
//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***loggedIn***REMOVED***=***REMOVED***!loggedIn;
//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***//***REMOVED***res.end(`Logged***REMOVED***In:***REMOVED***${logged}`)
//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***//***REMOVED***console.log(`Logged***REMOVED***In:***REMOVED***${logged}`)
//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***console.log("Logged:",***REMOVED***loggedIn);

//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***res.json({loggedIn})
//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***//***REMOVED***res.json({log:***REMOVED***logged})
//***REMOVED***});

//***REMOVED***App.delete('/count',***REMOVED***function(req,***REMOVED***res){
//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***counter***REMOVED***=***REMOVED***0;
//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***//***REMOVED***res.end(`Count:***REMOVED***${counter}`)
//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***res.json({count:***REMOVED***0})
//***REMOVED***});



//***REMOVED***App.get('/sum/:v1/:v2',***REMOVED***(req,***REMOVED***res)***REMOVED***=>***REMOVED***{
//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***const***REMOVED***{v1,***REMOVED***v2}***REMOVED***=***REMOVED***req.params;
//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***res.json({sum:((+v1)+(+v2))})
//***REMOVED***});


//***REMOVED***app.post('/login',***REMOVED***(req,***REMOVED***res)***REMOVED***=>***REMOVED***{
//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***const***REMOVED***{***REMOVED***username,***REMOVED***password***REMOVED***}***REMOVED***=***REMOVED***req.body;

//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***if***REMOVED***(username***REMOVED***===***REMOVED***validUsername***REMOVED***&&***REMOVED***password***REMOVED***===***REMOVED***validPassword)***REMOVED***{
//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***res.json({***REMOVED***message:***REMOVED***"Logged***REMOVED***In"***REMOVED***});
//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***}***REMOVED***else***REMOVED***{
//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***res.json({***REMOVED***message:***REMOVED***"No***REMOVED***Dice***REMOVED***RES"***REMOVED***});

//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***res.status(401).json({***REMOVED***error:***REMOVED***"No***REMOVED***Dice***REMOVED***STATUS"***REMOVED***});
//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***}
//***REMOVED***});


//***REMOVED***http.listen(port,***REMOVED***function(){
//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***console.log(`Listening***REMOVED***on***REMOVED***Port***REMOVED***${port}`)
//***REMOVED******REMOVED******REMOVED******REMOVED******REMOVED***console.log({env:process.env})
//***REMOVED***})

