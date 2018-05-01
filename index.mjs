import Application from './lib/Application';
import IndexController from './controller/IndexController'

const routes = {
    '/': IndexController,
};

const app = new Application(routes);

app.start();