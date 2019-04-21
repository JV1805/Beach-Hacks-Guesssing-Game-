var express = require('express'),
  app = express(),
	bodyParser = require('body-parser'),
  port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Credentials", true);
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.get('/test', function(req, res){
	console.log("done");
        var ranNum = Math.floor(Math.random() *3);
	res.json(ranNum);
});

app.listen(port);
//http.route("/").listen(port);
//app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

