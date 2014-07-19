//app.js
//var connect = require('connect');
//connect.use(
//    connect.static('~/heroku_project/connect',{default : "index.html"})
//).listen(3000);
var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic(__dirname));
app.listen(5000);
