var e = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(e.static(__dirname + '/static'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.on('message', function (obj) {
      io.emit('message', obj);
  });
});

http.listen(3000, function () {
    console.log('listenig *:3000');
});