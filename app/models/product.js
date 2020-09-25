const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  nome: String,
  preco: Number,
  descricao: String,
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  }
});

module.exports = mongoose.model('Produto', productSchema);