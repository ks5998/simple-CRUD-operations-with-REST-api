const router = require('express').Router();

const bookController = require("./controller")

module.exports = app => {
    router.get('/', bookController.getAll)
    router.get('/:id', bookController.getById)
    router.post('/', bookController.create)
    router.put('/:id', bookController.update)
    router.delete('/:id', bookController.delete)

    app.use('/books', router)
}