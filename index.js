const express = require('express');

// set up express app
const app = express();

// init routes
app.use('/api',  require('./routes/api'));

//listen for requests
app.listen(process.env.port || 4000, function () {

});
