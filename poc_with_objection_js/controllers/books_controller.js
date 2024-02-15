const Book = require('../models/books');

const createBook = async (req, res) => {
    try {
        const { title, user_id } = req.body; 
        const newBook = await Book.query().insert({
          title,
          user_id,
        });
    
        res.status(201).json({
          message: 'Book created successfully',
          book: newBook,
        });
      } catch (error) {
        console.error('Error creating book:', error);
        res.status(500).json({ error: 'An error occurred while creating the book.' });
      }
};

const getBooks = async (req, res) => {
    try {
        const newBook= await Book.query();
        console.log(newBook);
        res.json(newBook);
    } catch (error) {
        console.log(`getting error=> ${error}`);

    }
};

const updateBook = async (req, res) => {
    try {
        const user = await Book.query().where({ id: req.params.id }).patch(req.body);
        res.json("updated sucessfully...");
        
    } catch (error) {
        console.log(error);
    }
};

const deleteBook = async (req, res) => {
    try {
        const book = await Book.query().delete().where({ id: req.params.id });
        res.json({
            success: true,
            message: "book was deleted"
        });
        console.log(`this book was deleted: ${user}`);
        
      } catch (error) {
        console.log(error);
        
      }
};

module.exports = {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
};