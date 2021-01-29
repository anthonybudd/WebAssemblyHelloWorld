var express = require('express');

var app = express();
app.use(express.static('./'));

module.exports = app.listen(8000, () => console.log(`App listening on port 8000`));