const express = require('express');
const router = express.Router();
const bookController = require('../controllers/books_controller');

router.post('/add_book', bookController.createBook);
router.get('/check_book', bookController.getBooks);
router.put('/update_book/:id', bookController.updateBook);
router.delete('/delete_book/:id', bookController.deleteBook);

module.exports = router;