var connect = require('connect'),
  app = connect(),
  port = process.env.PORT;

var compression = require('compression');
var serveStatic = require('serve-static')
app.use(compression());
app.use(serveStatic(__dirname + '/public'));

app.listen(port, function(){
  console.log('Hexo is running on port %d', port);
});
