const express = require('express'); //importação do express
const cors = require('cors');
const res = require('express/lib/response');
const app = express(); // criar obj com nome de express
const routes = require('./routes');

app.use(express.json()); // informar que usará json
app.use(cors());
app.use(routes); //informar que irá usar o routes que foi importado

app.get('/', (req, res) => {
  res.send('Hello, World!');
}); // criar primeira rota

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
