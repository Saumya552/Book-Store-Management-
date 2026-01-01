const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const multer = require('multer');
const path = require('path');
const router =  express.Router();

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// frontend => backend server => controller => book schema  => database => send to server => back to the frontend
//post = when submit something fronted to db
// get =  when get something back from db
// put/patch = when edit or update something
// delete = when delete something

// post a book
router.post("/create-book", verifyAdminToken, upload.single('coverImage'), postABook)

// get all books
router.get("/", getAllBooks);

// single book endpoint
router.get("/:id", getSingleBook);

// update a book endpoint
router.put("/edit/:id", verifyAdminToken, UpdateBook);

router.delete("/:id", verifyAdminToken, deleteABook)


module.exports = router;
