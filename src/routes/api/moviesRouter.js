const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesController');

router.get('/api/movies', moviesController.list);
router.post('/api/movies', moviesController.store);
router.delete('/api/movies/:id', moviesController.delete);

module.exports = router;