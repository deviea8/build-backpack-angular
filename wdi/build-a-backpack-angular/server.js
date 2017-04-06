var express = require('express');
var app = express();

//Use this as our static directory
app.use(express.static(__dirname + '/public'));

var supplyRouter = require(__dirname + '/server/routes/supplyRouter.js');
app.use('/supplies', supplyRouter);

app.listen(process.env.PORT || 3000, function() {
  console.log('Backpack app now listening on port 3000');
});
