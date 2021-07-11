const socketIO = require('socket.io');
var ot = require('ot');
const Task = require('./models/Task');
var roomList = {};

module.exports = function(server){
    var str = '// Write your code here\n\n';
    const io = socketIO(server);

    // array of all lines drawn
var content;
var code = 0;

// event-handler for new incoming connections
io.on('connection', function (socket) {

   
    socket.emit('startup', { content: content, code: code });
    

    

    socket.on('code', function(uid){
        if(code === 0){
           code = 1;
            io.emit('code', uid);
        }
    });

    socket.on('release', function(){
        if(code === 1){
            code = 0;
            io.emit('release');
        }
    });

    socket.on('codeContent', function(data){
        content = data.content;
        io.emit('codeContent', data);
    })

    socket.on('send',(message)=>{
       
        io.emit('rcv',message);

    })

});
}