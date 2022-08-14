const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://<username>:<password>@cluster001.n7robbw.mongodb.net/?retryWrites=true&w=majority")

const Book = mongoose.model('books', 
mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    rating: { type: Number },
    created_at: { type: Date, default: Date.now }
}));

module.exports = { Book };
