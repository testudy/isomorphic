import http from 'http';
import fsPromises from 'fs/promises';
import Hogan from 'hogan.js';


const server = http.createServer(async (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
    });
    const templateText = await fsPromises.readFile('./public/index.html', {
        encoding: 'utf-8',
        flag: 'r',
    });
    const template = Hogan.compile(templateText);
    res.end(template.render({name: '暖暖 & 晓晓'}));
});


server.listen(3000);