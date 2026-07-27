const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '..', 'data', 'users.json');

router.get('/', (req, res) => {
  fs.readFile(usersPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send({ message: 'Ocorreu um erro no servidor' });
    }
    return res.status(200).send(JSON.parse(data));
  });
});

router.get('/:id', (req, res) => {
  fs.readFile(usersPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send({ message: 'Ocorreu um erro no servidor' });
    }
    const users = JSON.parse(data);
    const user = users.find((item) => item._id === req.params.id);
    if (!user) {
      return res.status(404).send({ message: 'ID do usuário não encontrado' });
    }
    return res.status(200).send(user);
  });
});

module.exports = router;
