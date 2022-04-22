const express  = require('express');
const http     = require('http');
const socketio = require('socket.io');
const path     = require('path'); // Viene instalado en express

class Server {

    constructor() {
        this.app  = express();
        this.port = 8080;

        // HTTP server
        this.server  = http.createServer( this.app );

        // Configuraciones de Sockets
        this.io = socketio( this.server, {/* Configuraciones  */} ); 
    }

    middlewares() {
        // Desplegar el directorio público
        this.app.use( express.static( path.resolve(__dirname, '../public') ));
    }

    execute() {

        // Inicializar Middlewares
        this.middlewares();

        // Inicializar Server
        this.server.listen( this.port, () => {
            console.log('Server run into port ', this.port);
        });
    }
}

module.exports = Server;