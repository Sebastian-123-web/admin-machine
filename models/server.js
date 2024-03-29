const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.port = process.env.PORT;
        this.app = express();

        this.middlewares();
        this.router();
    }

    middlewares(){
        this.app.use(cors());

        this.app.use(express.json());

        this.app.use(express.static('./public'));
    }

    router(){
        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor escuchando en el puerto', this.port);
        });
    }
}

module.exports = Server;