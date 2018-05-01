import fsPromises from 'fs/promises';
import Hogan from 'hogan.js';
import Controller from '../lib/Controller';

export default class IndexController extends Controller {
    async toString (app, req, res) {
        const templateText = await fsPromises.readFile('./public/index.html', {
            encoding: 'utf-8',
            flag: 'r',
        });
        const template = Hogan.compile(templateText);
        return template.render({name: this.context.query.name || '婧凡 & 静远'});
    }
}