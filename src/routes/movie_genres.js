const express = require('express');
const movieGenresSchema = require('../models/movie_genres');

const router = express.Router();


// crear movie Genres

router.post("/movie_genres", (req,res) => {
    const movieGenres = movieGenresSchema(req.body);
    movieCast
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//traer todo movie Genres

router.get("/movie_genres", (req, res) => {
    movieGenresSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

//traer movie genres por id

router.get('/movie_genres/:id', (req, res) => {
  const { id } = req.params;
  movieGenresSchema
    .findById(id)
    .then((movieGenres) => res.json(movieGenres))
    .catch((error) => res.status(500).json({ message: error }));
});

//eliminar un Movie Genres

router.delete('/movie_genres/:id', (req, res) => {
  const { id } = req.params;
  movieGenresSchema
      .deleteOne({ _id: id })
      .then(() => res.json({ message: 'MovieGenres deleted successfully' }))
      .catch((error) => res.status(500).json({ message: error }));
});

//actualizar un movie genres

router.put('/movie_genres/:id', (req, res) => {
  const { id } = req.params;
  const { gen_id, mov_id } = req.body;
movieGenresSchema
.findOneAndUpdate({ _id: id }, { gen_id, mov_id }, { new: true })
.then((updatedDocument) => {
  if (!updatedDocument) {
    return res.status(404).json({ message: 'Movie Genres not found' });
  }
  res.json(updatedDocument);
})
.catch((error) => res.status(500).json({ message: error }));
});


module.exports = router;
