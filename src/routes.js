const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')

routes
    // Users
    .get('/users', UserController.index)
    .post('/users', UserController.create)
    .put('/users/:id', UserController.update)
    .delete('/users/:id', UserController.delete)
    // Address
    .get('/address', AddressController.index)
    .post('/address', AddressController.create)
    .put('/address/:id', AddressController.update)
    .delete('/address/:id', AddressController.delete)

module.exports = routes