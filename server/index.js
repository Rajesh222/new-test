import express from 'express';
import bodyParser from 'body-parser';
import cards from './routes/cards';
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
cards(app);
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '../client/build/index.html'));
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

// Export our app for testing purposes
export default app;
