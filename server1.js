//import {create} from 'node:domain';
//import {createServer} from 'http';
var http = require('http');
var multer = require('multer');

http.createServer((req,res)=> {

    res.writeHead(200,{'content-Type':'text/plain'});
    console.log('server running')
    res.end('welcome to Node server!\n');


}).listen(3100);

// http.listen(3000, '127.0.0.1', () =>{
//     console.log('listing on 127.0.0.1:3000');
// })