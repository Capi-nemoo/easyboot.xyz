const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const server = http.createServer(function(req, res){
    // Determine the file path based on the URL
    let filePath = '.' + req.url;

    if (filePath === './') {
        filePath = './index.html';  // Default to index.html
    }

    // Get the file extension to set the appropriate content type
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Read and serve the requested file
    fs.readFile(filePath, function(error, data){
        if (error) {
            if (error.code == 'ENOENT') {
                // File not found
                fs.readFile('./404.html', function(error, data) {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end('404 - File Not Found', 'utf-8');
                });
            } else {
                // Some server error
                res.writeHead(500);
                res.end(`500 - Internal Server Error: ${error.code}`);
            }
        } else {
            // Serve the file with the appropriate content type
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data, 'utf-8');
        }
    });
});

server.listen(port, function(error){
    if (error) {
        console.log("something went wrong", error);
    } else {
        console.log('Server is listening on port ' + port);
    }
});