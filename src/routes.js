const express = require('express');
const routes = express.Router(); // criar obj com nome de routes
const users = [
  {
    id: 1,
    name: 'Maria',
    email: 'maria@email.com',
    password: '12345',
  },
];

routes.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    return res.status(200).json(user);
  }

  return res.status(401).json({ message: 'Invalid credentials' });
}); // criar rota de get

module.exports = routes; // exportar arquivo
