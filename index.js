var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

// listen (start app with node index.js) 
app.listen(8080);
console.log("App listening on port 8080");