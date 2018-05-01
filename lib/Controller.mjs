export default class Controller {
    constructor (context) {
        this.context = context;
    }

    async toString (app, req, res) {
        return '';
    }
}