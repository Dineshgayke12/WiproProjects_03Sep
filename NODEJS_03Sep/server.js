// server.js
const http = require('http');
const uploadFile = require('./upload');

const server = http.createServer((req, res) => {
    if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
        uploadFile(req, res);
    } else {
        // Display the file upload form
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <form action="/upload" enctype="multipart/form-data" method="post">
                <input type="file" name="upload"><br>
                <input type="submit" value="Upload">
            </form>
        `);
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
