let express = require("express");

let App = express(); //instantiates the app

let http = require("http").Server(App); //http server is built on express

let port = process.env.PORT;

let counter = 0;

//SET UP ROUTES
App.get('/', function(req, res){
    res.end("Hello WOrld, Testign the end point")

}); 




App.get('/count', function(req, res){
    counter++;
    res.end(`Count: ${counter}`)

});



App.get('/sum/:v1/:v2', (req, res) => {
    const {v1, v2} = req.params;
    res.json({sum:((+v1)+(+v2))})
});



http.listen(port, function(){
    console.log(`Listening on Port ${port}`)
    console.log({env:process.env})
})

