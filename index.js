var e = require('express');
var appOne = express();
var htt = require('http').Server(app);
var io = require('socket.io')(http);

appOne.use(e.static(__dirname + '/static'));

appOne.get('/', function (req, res) {
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