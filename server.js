const express = require('express')
const app = express()
const routes = require('./api/routes.js');


var server = app.listen(process.env.PORT || 3000, function () {
	var port = server.address().port;
	console.log("App now running on port", port);
});

app.use(routes);

app.get('/', function (req, res) {
  console.log(req)
  res.status(200).send('OK!');
})