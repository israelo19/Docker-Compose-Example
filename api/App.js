let express = require('express');

let cors = require('cors');

let App = express(); //instantiates the app

let http = require("http").Server(App); //http server is built on express

let port = process.env.PORT;

App.use(cors());
App.options('*', cors());

let user = "d"
let pass = "dd"
let counter = 0;
let loggedIn = false;

//SET UP ROUTES
App.get('/', function(req, res){
    res.end("Hello World, Testign the end point!")

}); 
 


// App.get('/count', function(req, res){
//     counter++;
//     // res.end(`Count: ${counter}`)
//     res.json({count: counter})
// });
App.get('/login', function(req, res){
    
    loggedIn = !loggedIn;
    // res.end(`Logged In: ${logged}`)
    // console.log(`Logged In: ${logged}`)
    console.log("Logged:", loggedIn);

    res.json({loggedIn})
    // res.json({log: logged})
});

App.delete('/count', function(req, res){
    counter = 0;
    // res.end(`Count: ${counter}`)
    res.json({count: 0})
});



App.get('/sum/:v1/:v2', (req, res) => {
    const {v1, v2} = req.params;
    res.json({sum:((+v1)+(+v2))})
});

App.post('/login', (req, res) => {
    const {username, password} = req.params;

    //logic check with username and pass
    res.json({sum:((+v1)+(+v2))})
});



http.listen(port, function(){
    console.log(`Listening on Port ${port}`)
    console.log({env:process.env})
})

