const mongoose = require('mongoose');
// const formController = require('../controllers/form');

const formSchema = new mongoose.Schema({
  restaurantName: String,
  dishName: String,
  rating: String,
  notes: String,
});

const formMessage = mongoose.model('FormMessage', formSchema);

module.exports = formMessage;
