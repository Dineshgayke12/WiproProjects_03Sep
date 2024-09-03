
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

const uploadFile = (req, res) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join('C:\\Users\\Admin\\Desktop\\HTML\\NODEJS_03Sep\\file', '/uploads');
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error uploading file');
            return;
        }

        const oldPath = files.upload.path;
        const newPath = path.join(form.uploadDir, files.upload.name);

        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error saving file');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('File uploaded successfully');
        });
    });
};

module.exports = uploadFile;
