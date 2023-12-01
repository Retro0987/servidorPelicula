const Movie = require('../models/movie.model');

exports.getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json({
            msg: "Exito al Consultar",
            data: movies
        });
    }catch (error) {
        return res.status(500).json({         
            msg: "Error al Consultar",
            data: error
         
        });
    }
}

exports.getMovieById = async (req, res) => {
    const movieId = req.params.movieId;
    try {
        const movie = await Movie.findById(movieId);
        return res.status(200).json({
            msg: "Pelicula obtenida con exito",
            data: movie
        });
    }catch (error) {
        return res.status(500).json({         
            msg: "Error al Consultar",
            data: error
         
        });
    }
}

exports.newMovie = async (req, res) => {
    try {
        const {nombre, director, ano, duracion, genero} = req.body;
        const newMovie = new Movie({
            nombre,
            director,
            ano,
            duracion,
            genero
        });
        await newMovie.save();
        return res.status(200).json({
            msg: "Pelicula Creada",
            data: newMovie
        });
    }catch (error) {
        return res.status(500).json({         
            msg: "Error al Crear Pelicula",
            data: error
         
        });
    }
}

exports.updateMovie = async (req, res) => {
    const movieId = req.params.movieId;
    const newDatos= req.body;
    try {
        const updateMovie =await Movie.findByIdAndUpdate(movieId, newDatos, {new: true});
        return res.status(200).json({
            msg: "Pelicula Actualizada",
            data: updateMovie
        });
    }catch (error) {
        return res.status(500).json({         
            msg: "Error al Actualizar laelicula",
            data: error
        });
    }
}

exports.deleteMovie = async (req, res) => {
    const movieId = req.params.movieId;
    try {
       await Movie.findByIdAndDelete(movieId);
        return res.status(200).json({
            msg: "Pelicula eliminada",
        });
    }catch (error) {
        return res.status(500).json({         
            msg: "Error al Eliminar la Pelicula",
            data: error
        });
    }
}