import mongoURI from './config/keys';
import mongoose from 'mongoose';

mongoose.connect(mongoURI, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
console.log("we are coneccted")
});





