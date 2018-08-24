function runServer() {
  var http = require('http');
  http
    .createServer(function(req, res) {
      res.writeHead(200);
      var status = req.url.replace('/?', '');
      if (status === 'on') ledStatus(0);
      if (status === 'off') ledStatus(1);

      res.end('LED status = ' + status);
      mqtt.publish('myTopic', 'ledStatus' + status);
    })
    .listen(8080);
}
