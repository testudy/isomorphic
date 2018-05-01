import http from 'http';
import Call from 'call';
import Url from 'url';

export default class Application {
    constructor (routes) {
        this.server = this.initServer();
        this.router = new Call.Router();
        this.routes = routes;
        this.registerRoutes();
    }

    registerRoutes () {
        for (const path in this.routes) {
            this.router.add({
                path,
                method: 'GET',
            });
        }
    }

    initServer () {
        const server = http.createServer(async (req, res) => {
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8',
            });

            const url = Url.parse(req.url, true);
            const match = this.router.route('get', url.pathname);
            if (match.route) {
                const Controller = this.routes[match.route];
                if (Controller) {
                    const controller = new Controller({
                        query: url.query,
                        params: match.params,
                    });
                    const result = await controller.toString(this, req, res);
                    res.end(result);
                }
            } else {
                res.end();
            }
        });
        return server;
    }

    start () {
        this.server.listen(3000);
    }
}