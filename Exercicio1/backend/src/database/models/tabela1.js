const mongoose = require('..')

const Tabela1Schema = new mongoose.Schema({
    date: {
        type: Date,
        require: true
    },
    numeroVisitas: {
        type: Number,
        require: true
    },
    paginas: {
        type: Number,
        require: true,
    },
    hits: {
        type: Number,
        require: true
    },
    MBytes: {
        type: Number,
        require: true
    }

})

const Tabela1 = mongoose.model('Tabela', Tabela1Schema)

module.exports = Tabela1