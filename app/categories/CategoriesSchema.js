const mongoose = require('mongoose');
/**
 * Organization users
 */
const Categories = new mongoose.Schema({
  code: String,
  name: String,
  description: String,
  businessType: String
});
mongoose.model('CategoriesSchema', Categories);

module.exports = mongoose.model('CategoriesSchema');