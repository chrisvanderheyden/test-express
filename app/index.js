var express = require('express');
var app = express();

app.get('/locations',function(req,res){
  var cities = ['Caspiana','Indigo','Paradise'];
  res.send(cities);
});

app.listen(3001,function(){
	console.log('Running Express');  
});

