var dt=require('./module1');
var http= require('node:http');
// import dt from './module1';
// import http from 'http';

http.createServer(function(res,res){
    res.writeHead(200,{'Content-type': 'text/html'});
    console.log("server running");
    res.write("current Date and Time :"+ dt.dateTime());
    res.end;
}).listen(3100);
