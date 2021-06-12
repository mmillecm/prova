const express = require('express');
const Tabela1 = require('../models/tabela1')

const router = express.Router();

router.post('/cadastro', async(req, res) => {

    try {

        const cadastro = await Tabela1.create(req.body)

        return res.send({ cadastro })

    } catch (error) {
        return res.status(400).send({ err: error })
    }

})

router.get('/cadastro', async(req, res) => {

    try {
        const cadastro = await Tabela1.find()

        return res.send({ cadastro })

    } catch (error) {
        return res.status(400).send({ err: error })
    }

})

module.exports = app => app.use('/projeto', router)