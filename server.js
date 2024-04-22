const http = require('http');
const requsestListener = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    //response.end ('<h1>Be;ajar membuat server</h1>');

    const { method, url } = req;

    if (method === 'GET') {
        res.end('<h1>Hello GET</h1>');
    }

    if (method === 'POST') {
        res.end('<h1>Hai POST</h1>');
    }

    if (method === 'PUT') {
        res.end('<h1>Halo PUT</h1>');
    }

    if (method === 'DELETE') {
        res.end('<h1>Salam DELETE</h1>');
    }
}

const server = http.createServer(requsestListener);

const port = 5000;
const host = 'localhost';
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
})