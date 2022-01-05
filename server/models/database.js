const mongoose = require('mongoose');
const MONGODB_URI = "mongodb://localhost:27017/Recipes";
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});

require('./Category');
require('./Recipe');
