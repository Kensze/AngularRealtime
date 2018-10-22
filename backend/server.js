var express = require('express');
var app = express();


//CORS Middleware
app.use(function (req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
 next();
});

// Hardcoded identifier and data for easy and quick testing without setting up database
app.get('/homes', function (req, res) {


	res.json({
    "home": [{
    "id": 1,
    "rooms": [{
        "name": "Vardagsrum",
        "temperature": 21,
        "humidity": 0.2}]
  	},{
    "id": 2,
    "rooms": [{
        "name": "Vardagsrum",
        "temperature": 21,
        "humidity": 0.2}]
  	}]
  });
})



// Hardcoded identifier and data for easy and quick testing without setting up database
app.get('/homes/1/data', function (req, res) {

	var temperature1;
    var humidity1;

    var temperature2;
    var humidity2;

	temperature1 = Math.floor((Math.random() * 100) + 1);
    humidity1 = Math.random();

    temperature2 = Math.floor((Math.random() * 100) + 1);
    humidity2 = Math.random();


	res.json(
    {
    "id": 1,
    "rooms": [{
        "name": "Vardagsrum",
        "temperature": temperature1,
        "humidity": humidity1}, { 
            "name": "Kök",
            "temperature": temperature2, 
            "humidity": humidity2 
    }]
  });
})


// Hardcoded identifier and data for easy and quick testing without setting up database
app.get('/homes/2/data', function (req, res) {

    var temperature1;
    var humidity1;

    temperature1 = Math.floor((Math.random() * 100) + 1);
    humidity1 = Math.random();

	res.json({
    "id": 2,
    "rooms": [{
        "name": "Vardagsrum",
        "temperature": temperature1,
        "humidity": humidity1
  	}]
  });
})


var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Backend running at http://%s:%s", host, port)

})