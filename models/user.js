//require mongoose
//need to create a new schema with the schema object and pass the object of keys/values from the value and make sure we get all the data

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs')
var UserSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    favoriteBook: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    }
});

// function to run just prior to sending it to Mongo; has password
// hook name 'save' mongoose keyword, before saving mongoose will run the anonymous function
// this var user is the current instance of the user submission
// 10 how many times to process the password
UserSchema.pre('save', function(next) {
  var user = this;
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});


// need to export to use schema in repo, create new variable use model method and then it creates our schema.
var User = mongoose.model('User', UserSchema);
module.exports = User;