const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 13666;

app.use(cors());
app.use('/listing-info', express.static(path.join(__dirname, 'public'));

app.get('/', (req, res) => (
  res.send('Hello World!'))
);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));