const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const jwt = require('jsonwebtoken');

router.post('/:id/borrow', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const { id } = req.params;
    try {
        const decoded = jwt.verify(token, 'secret_key');
        const book = await Book.findById(id);
        if (!book || !book.isAvailable) {
            return res.status(400).json({ message: 'Book not available for borrowing' });
        }
        book.isAvailable = false;
        await book.save();
        res.json({ message: 'Book borrowed successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/:id/return', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const { id } = req.params;
    try {
        const decoded = jwt.verify(token, 'secret_key');
        const book = await Book.findById(id);
        if (!book || book.isAvailable) {
            return res.status(400).json({ message: 'Invalid request' });
        }
        book.isAvailable = true;
        await book.save();
        res.json({ message: 'Book returned successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
