const path = require('path');

module.exports = (monkey) =>
  monkey.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
