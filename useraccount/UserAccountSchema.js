const mongoose = require('mongoose');

// const contact = new mongoose.Schema({
//     firstName: String,
//     lastName:  String,
//     email: String,
//     phone: String
// })

const UserAccount = new mongoose.Schema({
    id: String,
    username: String,
    locale: String,
    contact: Object
});
mongoose.model('UserAccountSchema', UserAccount);

module.exports = mongoose.model('UserAccountSchema');