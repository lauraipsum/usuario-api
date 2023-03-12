const express = require('express'); //importa o express

const bodyParser = require('body-parser');
const cors = require('cors');



const app = express(); //instanciando o app
const port = 3000; //define a porta


let usuarios = []; //onde os usuarios serao armazenados

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/usuario', (req, res) => {
    const usuario= req.body;

    console.log(usuario);
    usuarios.push(usuario);

    res.send('Usuario adicionado com sucesso');
});

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
