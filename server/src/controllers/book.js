
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// Add a new book to the list
exports.addBook = async (req, res, next) => {
    const { title, author, note, genre, description } = req.body;
    try {
        const book = await prisma.book.create({
            data: {
                title,
                author,
                description,
                note,
                genre,
            },
        });
        console.log(book);
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get all books
exports.getAllBooks = async (req, res, next) => {
    try {
        const books = await prisma.book.findMany();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get a book by id
exports.getBookById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const book = await prisma.book.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update book
exports.updateBook = async (req, res, next) => {
    const id = req.params.id;
    const { title, author, note, genre, description } = req.body;
    try {
        const book = await prisma.book.update({
            where: {
                id: parseInt(id),
            },
            data: {
                title,
                author,
                description,
                note,
                genre,
            },
        });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete book
exports.deleteBook = async (req, res, next) => {
    const id = req.params.id;
    try {
        const book = await prisma.book.delete({
            where: {
                id: parseInt(id),
            },
        });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
