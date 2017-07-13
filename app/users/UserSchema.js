const mongoose = require('mongoose');
/**
 * Organization users
 */
const User = new mongoose.Schema({
  id: Number,
  firstName: String,
  lastName: String,
  userId: String,
  username: String,
  emailAddress: String,
  organizationId: String,
  status: String,
  userRole: String,
  dateAdded: Date
});
mongoose.model('UserSchema', User);

module.exports = mongoose.model('UserSchema');