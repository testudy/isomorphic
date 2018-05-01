import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });
    res.write('<h1>hello 1</h1>');
    setTimeout(() => {
        res.write('<h2>hello 2</h2>');
        setTimeout(() => {
            res.write('<p>hello 3</p>');
            setTimeout(() => {
                res.end('<p>okey</p>');
            }, 2000);
        }, 2000);
    }, 2000);
});

server.listen(3000);
