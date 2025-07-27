const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
});

module.exports = mongoose.model('Trip', tripSchema);
