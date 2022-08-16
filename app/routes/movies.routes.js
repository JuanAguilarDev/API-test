const controller = require('../controllers/movie.controller');

module.exports = function(app){
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    //   Get movies
    app.get('/api/movies/allMovies', controller.showAll);

    //   Update movies
    app.put('/api/movies/update/:id', controller.update)
}