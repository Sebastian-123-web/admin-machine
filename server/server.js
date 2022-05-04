const express = require('express');


class Server{
    constructor(){
        this.port = process.env.PORT;
        this.app = express();
    }

    listen(){
        this.app.listen(this.port, (){
            console.log('Servidor escuchando en el puerto', this.port);
        });
    }
}