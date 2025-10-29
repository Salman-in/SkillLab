const http = require('http');

const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/hello') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'GET request received' }));
    }
    else if(req.method === 'POST' && req.url === '/hello') {
        res.writeHead(201, { 'Content-Type': 'application/json' });

        console.log(req.method);

        res.end(JSON.stringify({ message: 'POST request received' }));
    }
    else if(req.method === 'PUT' && req.url === '/hello') {
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'PUT request received' }));
    }
})

server.listen(8080, () => {
    console.log('Server is running on localhost:8080');
})