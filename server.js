// como un recurso REST y ser capaz de agregar una películas nueva, mostrar todas las películas, buscar una película específica por su id, 
// borrar una película y actualizar los detalles de una película específica.

const express = require('express');
const cors = require('cors');
const app = express();


const PORT = process.env.PORT || 3000;

var corsOptions = {
    origin: "http://localhost:3000"
};

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Routes
require('./app/routes/movies.routes')(app);


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}.`);
});


