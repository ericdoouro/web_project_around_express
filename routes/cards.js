const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const cardsPath = path.join(__dirname, '..', 'data', 'cards.json');

router.get('/', (req, res) => {
  fs.readFile(cardsPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send({ message: 'Ocorreu um erro no servidor' });
    }
    return res.status(200).send(JSON.parse(data));
  });
});

module.exports = router;
