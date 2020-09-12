const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Definir porta onde o server vai responder
const port = process.env.PORT || 3000;

//Persistência
const connectionString = "mongodb+srv://edilson:edilson@cluster0-nffnp.mongodb.net/dbpos?retryWrites=true&w=majority";
mongoose.connect(connectionString, {
                                      useNewUrlParser:true, 
                                      useUnifiedTopology: true, 
                                      useFindAndModify: false
                                    }
);

//Definindo as rotas
const router = express.Router(); // Interceptar todas as rotas
const productRoute = require('./routes/product-route');
const indexRoute = require('./routes/index-route');

// '/api' é o caminho padrão para as APIs REST
app.use('/api', indexRoute);

// Rota para produto
app.use('/api/produtos/', productRoute);

app.listen(port, () => {
  console.log('server is up and running ... ');
});