const mongoose = require('mongoose');
const Book = require('./src/books/book.model');
const booksData = require('./books.json'); // assuming you copy the json to backend

require('dotenv').config();

async function seedBooks() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected to MongoDB');

        // Clear existing books
        await Book.deleteMany({});
        console.log('Cleared existing books');

        // Remove _id from booksData
        const booksWithoutId = booksData.map(book => {
            const { _id, ...rest } = book;
            return rest;
        });

        // Insert new books
        await Book.insertMany(booksWithoutId);
        console.log('Books seeded successfully');

        process.exit();
    } catch (error) {
        console.error('Error seeding books:', error);
        process.exit(1);
    }
}

seedBooks();