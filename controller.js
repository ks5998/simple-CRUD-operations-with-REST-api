const { Book } = require('./model');

module.exports.getAll = async (_, res) => {
    try {
        const books = await Book.find({}).exec();
        const booksObj = {}
        books.forEach(book => ( booksObj[book._id] = book ))
        return res.status(200).json({ data: booksObj, success: true })
    } catch (error) {
        return res.status(401).json({ error: error.message, success: false })
    }
}

module.exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id).exec();
        return res.status(200).json({ data: book, success: true })
    } catch (error) {
        return res.status(500).json({ error, success: false })
    }
}

module.exports.create = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        return res.status(200).json({ data: book, success: true })
    } catch (error) {
        return res.status(500).json({ error, success: false })
    }
}

module.exports.update = async (req, res) => {
    try {
        const { params: {id}, body } = req;
        const book = await Book.findByIdAndUpdate(id, body, { new: true }).exec();
        return res.status(200).json({ data: book, success: true })
    } catch (error) {
        return res.status(500).json({ error, success: false })
    }
}

module.exports.delete = async (req, res) => {
    try {
        const { params: {id} } = req;
        const result = await Book.deleteOne({ _id: id }).exec();
        return res.status(200).json({ data: result, success: true })
    } catch (error) {
        return res.status(500).json({ error, success: false })
    }
}