const Server = require('./models/server')

const server = new Server();

server.execute();

/*
// socketCliente -> socket que conecta con el cliente 
io.on('connection', ( socketCliente ) => { 

    
    // MANDAMOS
    console.log( socketCliente.id ); // id del cliente que se conecta
    socketCliente.emit('mensaje-bienvenida', {
        msg: 'Bienvenido al server 7u7',
        fecha: new Date()
    });
    

    socketCliente.on('msg-to-server', ( data ) => { // RECIBIMOS
        console.log( data );
        socketCliente.emit('msg-from-server', data ) // MANDAMOS
    })



}); // Conexión
*/


