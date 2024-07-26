let express = require('express');

let cors = require('cors');

let App = express(); //instantiates the app

let http = require("http").Server(App); //http server is built on express

let port = process.env.PORT;
const bodyParser = require('body-parser');
const auth = require('./auth')
const posts = require('./posts')
const db = require('./db')
const users = require('./users')

App.use(bodyParser.json())
App.use('/db', db)
App.use('/auth', auth)
App.use('/posts', posts)
App.use('/users', users)

App.use(cors());
App.options('*', cors());

let user = "admin"
let pass = "sspa"
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
    const { username, password } = req.body;

    if (username === user && password === pass) {
        loggedIn = true;
        res.json({ loggedIn: true, message: 'Login successful' });
    } else {
        loggedIn = false;
        res.json({ loggedIn: false, message: 'Invalid credentials' });
    }
});



http.listen(port, function(){
    console.log(`Listening on Port ${port}`)
    // console.log({env:process.env})
})
