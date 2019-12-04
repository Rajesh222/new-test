import db from '../../db/db';
import isValid from '../utils/validation';
const cards = app => {
  app.get('/api/v1/cards', (req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'All cards retrieved successfully',
      cards: db
    });
  });

  app.post('/api/v1/cards', (req, res) => {
    const { name, cardNumber, limit, balance } = req.body;
    const validationObj = isValid(req);
    if (!validationObj.success) {
      return res.status(400).send({
        success: false,
        message: validationObj.message
      });
    }
    const card = {
      id: db.length + 1,
      name,
      cardNumber,
      limit,
      balance
    };
    db.push(card);
    return res.status(201).send({
      success: true,
      message: 'Card added successfully',
      card
    });
  });
};

export default cards;
