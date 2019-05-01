// ----------------------------------------------------------------//
// Requires: Aca se definene las librerias.
// ----------------------------------------------------------------//
var express = require('express');
var mongoose = require('mongoose');

// ----------------------------------------------------------------//
// Inicializar variables
// ----------------------------------------------------------------//
var app = express();


// ----------------------------------------------------------------//
// Rutas: donde quiero accesder. Son instrucciones de express
// ----------------------------------------------------------------//
// Conexiones, por URL mediante el frame de Mongoose.
mongoose.connection.openUri('mongodb://localhost:27017/hospitaldb', (error, res) => {
    // Si no conecta sale con error sin ejectuar mensaje de conexion.
    if (error) throw error;
    console.log('Base de Datos: \x1b[32m%s\x1b[0m', 'online');
})

// app para el servicio . la instruccion
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'

    })
});

// Escuchar las peticiones definiendo el puerto
app.listen(3000, () => {
    console.log('Express corriendo en puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});