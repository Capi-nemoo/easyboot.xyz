require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.static('public'));

app.use(cors());
app.use(express.json());
  app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


///CONNECCION A MONGOSE


const mongoose = require('mongoose');


// INTEGRACION DE SOKET SUPUTAMADRE
const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer(app);
const io = new Server(server);


app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('Usuario conectado');
  socket.on('mensaje', (msg) => {
    console.log('Mensaje recibido:', msg);
    io.emit('mensaje', msg);
  });

  socket.on('disconnect', () => {
    console.log('Usuario desconectado');
  });
});


//rutas de aplicacion de express
const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);


const PORT = process.env.PORT || 3000;

// Cambiar a 0.0.0.0 para escuchar en todas las interfaces
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});


