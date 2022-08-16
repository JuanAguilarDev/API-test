const db = require('../data/movies.json');
const fs = require('fs');
const dir = require('path');
const { moveCursor } = require('readline');
const path = dir.join(__dirname, '../data/movies.json');

const movies = JSON.parse(fs.readFileSync(path, 'utf-8'));


// Intialize the path
try {
    if(!fs.existsSync(path)) {
        fs.writeFileSync(path, '[]')
    }
}catch (err) {
    console.log(err);
}

exports.update = (req, res) => {
    const body = req.body;
    const id = req.params.id;
    let index = movies.findIndex(movie => movie.id == id);
    if(index == -1) return res.send({msg: "This movie doesn't exist. "});

    const newMovie = {
        "id": movies[index].id,
        "title": body.title,
        "author": body.author,
        "gender": body.gender
    }

    movies[index] = {...newMovie};

    fs.writeFileSync(path, JSON.stringify(movies));
    res.send(movies);
}


exports.showAll = (req, res) => {
    if(movies.length == 0) res.send({msg: "There is no movies."});

    res.send(movies);
}