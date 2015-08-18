var connect = require('connect');
var app = connect();
var port = process.env.PORT;
var compression = require('compression');
var serveStatic = require('serve-static')
app.use(compression());
app.use(serveStatic(__dirname + '/public'));
app.use(function(req, res, next){
  switch (req.url) {
  case '/sitemap':
    res.writeHead(301, {Location: '/sitemap.xml'});
    res.end();
    break;

  case '/feed':
    res.writeHead(301, {Location: '/atom.xml'});
    res.end();
    break;
    
  default:
    console.log("redirect 404");
    //res.redirect('/404.html');
    res.writeHead(301, {Location: '/404.html'});
    res.end();
    break;
  }
});

app.listen(port, function(){
  console.log('Hexo is running on port %d', port);
});
