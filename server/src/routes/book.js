
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book');


router.post('/create', bookController.addBook);
router.get('/all', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.put('/update/:id', bookController.updateBook);
router.delete('/delete/:id', bookController.deleteBook);

module.exports = router;
