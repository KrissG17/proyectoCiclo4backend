const mongoose = require('mongoose');

const notaSchema = new mongoose.Schema({
  libroId: {
    required: [true, 'Digita libroId porfavor!'],
    index: true,
    type: String,
  },
  nota: {
    type: String,
    required: [true, 'Digita la nota a añadir!'],
    lowercase: true,
  },
});

const Nota = mongoose.model('Nota', notaSchema);

module.exports = Nota;
