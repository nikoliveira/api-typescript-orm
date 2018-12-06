import * as express from 'express';
import * as bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
import { UsuarioController } from './Controllers/UsuarioController';
import { Usuario } from './Entities/Usuario';
import { Empresa } from './Entities/Empresa';


class App {

    public app: express.Application;

    public userRoutes: UsuarioController = new UsuarioController();

    constructor() {
        this.app = express();
        this.config();

        this.userRoutes.routes(this.app);
    }

    private config(): void {

        this.app.use(bodyParser.json()); // application/json
       //  this.app.use(bodyParser.urlencoded({ // application/x-www-form-urlencoded post
       //      extended: false
       //  }));
        this.initDatabase();

    }

    private initDatabase(): void {
        createConnection({
            "type": "mysql",
            "host": "localhost",
            "port": 3306,
            "username": "root",
            "password": "",
            "database": "evt2",
            "logging": true,
            "entities": [Empresa, Usuario],
            "synchronize": true,
        }).then(connection => {
        }).catch(error => console.log(error));
    }

}

export default new App().app;