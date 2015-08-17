// var express = require("express"),
//     app = express(),
//     bodyParser = require('body-parser'),
//     errorHandler = require('errorhandler'),
//     methodOverride = require('method-override'),
//     hostname = process.env.HOSTNAME || 'localhost',
//     port = process.env.PORT || 3000,
//     publicDir = process.argv[2] || __dirname + '/public';

// app.get("/", function (req, res) {
//   res.redirect("/index.html");
// });

// app.use(methodOverride());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(express.static(publicDir));
// app.use(errorHandler({
//   dumpExceptions: true,
//   showStack: true
// }));

// console.log("Simple static server showing %s listening at http://%s:%s", publicDir, hostname, port);
// app.listen(port, hostname);

var sys = require("sys");
var http = require("http");
var url = require("url");
var path = require("path");
var fs = require("fs");
var port = process.env.PORT || 3000;


var app = http.createServer(function(req,res){
  var uri = url.parse(req.url).pathname;
  var filename = path.join(process.cwd()+'/public',uri);
  fs.exists(filename, function(exists){
    if(!exists){
      filename = path.join(process.cwd()+'/public/404/index.html');
    }

    fs.readFile(filename, "binary",function(err,file){
    if(err){
      res.writeHead(500,{"Content-Type":"text/plain"});
      res.end(err+"\n");
      return;
    }

    res.writeHead(200);
    res.end(file,"binary");
    });
  });
}).listen(port);

console.log("Server running on port %d", port);

// var connect = require('connect'),
//   app = connect(),
//   port = process.env.PORT;

// var compression = require('compression');
// var serveStatic = require('serve-static')
// app.use(compression());
// app.use(serveStatic(__dirname + '/public'));
// app.use(function(req, res, next){
//   switch (req.url) {
//   case '/404':
//     console.log("redirect 404");
//     res.redirect('/404.html');
//     break;
//   default:
//     var body = 'my page';
//     res.setHeader('Content-Length', body.length);
//     res.end(body);
//   }
// });

// app.listen(port, function(){
//   console.log('Hexo is running on port %d', port);
// });
