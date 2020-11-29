const knex = require('../database')

module.exports = {
    async index(req, res, next) {
        try {
            const results = await knex('address')
            
            return res.json(results) 

        } catch (error) {
            next(error)
        }
    },
    async create(req, res, next) {
        try {
            const { user_id, street, neighborhood, number } = req.body

            await knex('address').insert({
                user_id, street, neighborhood, number
            })

            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            const { street, neighborhood, number } = req.body
            const { id } = req.params

            await knex('address')
            .update({ street, neighborhood, number }) 
            .where({ id })

            return res.send()

        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('address')
            .where({ id })
            //.update('deleted_at', new Date())
            .del()

            return res.send()
            
        } catch (error) {
            next(error)
        }
    }
}